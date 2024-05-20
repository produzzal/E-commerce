import express, { Request, Response } from 'express';
import { Product } from './product.model';
import { ProductControlers } from './product.controller';

const router = express.Router();

//product post method
router.post('/', ProductControlers.createProductToDB);

//get all products
router.get('/', ProductControlers.getAllProductsFromDB);

// get product by specific id
router.get('/:productId', ProductControlers.getProductByIdFromDB);

//update product
router.put('/:productId', ProductControlers.updateProductByIdFromDB);

export const ProductRoutes = router;
