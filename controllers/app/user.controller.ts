import * as validate from "validate.js";
import { Request, Response } from "express";
import { okRes, errRes, getOTP, hashMyPassword } from "../../helpers/tools";
import validation from "../../helpers/validation.helper";
import { User } from "./../../src/entity/User";
import PhoneFormat from "../../helpers/phone.helper";
const jwt = require("jsonwebtoken");
export default class UserController {
  /**
   *
   * @param req
   * @param res
   */
  static async register(req: Request, res: Response): Promise<object> {
    let isNotValid = validate(req.body, validation.register());
    if (isNotValid) return errRes(res, isNotValid);
    let phoneObj = PhoneFormat.getAllFormats(req.body.phone);
    if (!phoneObj.isNumber)
      return errRes(res, `Phone ${req.body.phone} is not a valid`);
    let user: any;

    try {
      user = await User.findOne({
        where: { phone: req.body.phone },
      });
      if (user) return errRes(res, `phone ${req.body.phone} alrady exists`);
    } catch (error) {
      return errRes(res, error);
    }
    var hash = await hashMyPassword(req.body.password);
    user = await User.create({
      ...req.body,
      active: true,
      complete: false,
      password: hash,
      otp: getOTP(),
    });
    var token = jwt.sign({ id: user.id }, "shhhhh");
    await user.save();
    return okRes(res, token);
  }

  static async login(req: Request, res: Response) {
    let isNotValid = validate(req.body, validation.register());
    if (isNotValid) return errRes(res, isNotValid);

    let user: any;
    try {
      user = await User.findOne({
        where: { phone: req.body.phone, password: req.body.password },
      });
      if (user && user.complete === true)
        return okRes(res, ` you are sign in`);
        else
        return errRes(res,"error")
    
    } catch (error) {
      return errRes(res, error);
    }
  }
  static async otp(req, res) {
    let user: any;
    try {
      user = await User.findOne({ where: { otp: req.body.otp } });

      if (user) {
        user = await User.findOne({ where: { name: req.body.name ,phone:req.body.phone,password:req.body.password } });
        user.complete=true;
        await user.save();
        return okRes(res,"save OTP & complete=TRUE")
      }
      else
      { user = await User.findOne({ where: { name: req.body.name ,phone:req.body.phone,password:req.body.password } });
      user.otp="";
      user.save();
      return errRes(res, "false otp");}
    }
     catch(error) { 
      return errRes(res, error);
    }
  }
  
}
