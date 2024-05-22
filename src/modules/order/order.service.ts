import { Product } from '../product/product.model';
import { Order } from './order.model';

//get all orders
const getAllOrders = async (email: string) => {
  let orders;
  if (email) {
    orders = await Order.find({
      email: { $regex: email as string, $options: 'i' },
    });
    return orders;
  } else {
    orders = await Order.find();
    return orders;
  }
};

export const OrderServices = {
  getAllOrders,
};
