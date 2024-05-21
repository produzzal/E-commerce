import { Order } from './order.model';

//create order
const createOrder = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

export const OrderServices = {
  createOrder,
};
