import express from "express"
import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/product.controller.js';
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();


router.get('/',getProducts);

router.get('/:id',protectRoute,getProduct);

router.delete('/:id',protectRoute,deleteProduct);

router.put('/:id',protectRoute,updateProduct);

router.post('/',protectRoute,createProduct);



export default router;