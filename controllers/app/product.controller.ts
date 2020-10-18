import { okRes, errRes } from "../../helpers/tools";
import { Request, Response } from "express";

import { Product } from "./../../src/entity/products";

export default class categoryController {
  static async getProduct(req: Request, res: Response) {
    let product: any;

    try {
      product = await Product.findOne({
        where: { active: true, id:req.params.id }
      
      });
      if(product.id == product.categoryid )
      return okRes(res,product);
      else
      return errRes(res,"error");
    } catch (error) {
      return errRes(res, error);
    }
  }
}
