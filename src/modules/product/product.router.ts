import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

//product post method
router.post('/', ProductControllers.createProductToDB);

//get all products
router.get('/', ProductControllers.getAllProductsFromDB);

// get product by specific id
router.get('/:productId', ProductControllers.getProductByIdFromDB);

//update product
router.put('/:productId', ProductControllers.updateProductByIdFromDB);

//delete product
router.delete('/:productId', ProductControllers.DeleteProduct);

export const ProductRoutes = router;
