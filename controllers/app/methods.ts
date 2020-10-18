import { okRes, errRes } from "../../helpers/tools";
import { Request, Response } from "express";

import { method } from "./../../src/entity/method";

export default class methodController {
  static async getMehod(req: Request, res: Response) {
    let methodPay: any;

    try {
        methodPay = await method.find({
        where: { active: true}
      
      });
      return okRes(res,methodPay);
    } catch (error) {
      return errRes(res, error);
    }
  }
}
