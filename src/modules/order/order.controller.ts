import { Request, Response } from 'express';
import { OrderValidationSchema } from './order.zod.validation';
import { Product } from '../product/product.model';
import { OrderServices } from './order.service';

const orderCreate = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const orderData = req.body;
    const zodParseData = OrderValidationSchema.parse(orderData);

    // Check if the product exists
    const productExists = await Product.exists({ _id: productId });
    if (productExists) {
      const result = await OrderServices.createOrder(zodParseData);
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    }

    // Create the order
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

export const OrderControllers = {
  orderCreate,
};
