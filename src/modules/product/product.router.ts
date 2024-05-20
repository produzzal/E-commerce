import express, { Request, Response } from 'express';
import { Product } from './product.model';
import { ProductControlers } from './product.controller';

const router = express.Router();

//product post method
router.post('/', ProductControlers.createProductToDB);

//get all products
router.get('/', ProductControlers.getAllProductsFromDB);

export const ProductRoutes = router;
