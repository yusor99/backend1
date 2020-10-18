import * as express from "express";
const router=express.Router();
import UserController from './../../controllers/app/user.controller';
import categoryController from './../../controllers/app/category.controller';
import productController from './../../controllers/app/product.controller'
import methodController from './../../controllers/app/methods';

router.post('/register',UserController.register
);
router.post("/login", UserController.login);
router.post("/otp", UserController.otp);

router.post("/categories", categoryController.postCategories);
router.get("/getcategories", categoryController.getCategories);
router.get("/getproduct/:id", productController.getProduct);
router.get("/getMehod", methodController.getMehod);

 export default router; 
