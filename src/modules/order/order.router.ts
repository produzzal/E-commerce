import express from 'express';
import { OrderControllers } from './order.controller';
const router = express.Router();

export const OrderRoutes = router;

// order post
router.post('/', OrderControllers.orderCreate);

//get orders
router.get('/', OrderControllers.getAllOrdersFromDB);
