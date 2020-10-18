import { okRes ,errRes} from "../../helpers/tools";
import { Request, Response } from "express";
import { Category } from "./../../src/entity/Categories";
export default class categoryController {

  static async postCategories(req:Request, res:Response) {
    let category: any;
  
    try {
      category = await Category.create({
        active: false,
        id: 1,
        title: "one",
        icon:"hjvj"
      });
     
    }
     catch (error) {
      return errRes(res, error);
    }
 
    await category.save();
    return okRes(res,"cat created");
}
static async getCategories(req,res){
  let category: any;
  
    try {
      category = await Category.find({
       where:{ active: true}
       
      });
      return okRes(res,category);
    }
     catch (error) {
      return errRes(res, error);
    }
   
}
}
