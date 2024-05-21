import express from 'express';
import { OrderControllers } from './order.controller';
const router = express.Router();

export const OrderRoutes = router;
router.post('/', OrderControllers.orderCreate);
