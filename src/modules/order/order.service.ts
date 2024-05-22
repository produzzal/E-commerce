import { Product } from '../product/product.model';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  try {
    const { productId, quantity } = orderData;

    // find the product details
    const product = await Product.findById(productId);
    if (!product || !product.inventory) {
      throw new Error('Product not found');
    }

    if (product.inventory.quantity < quantity) {
      throw new Error('Insufficient quantity available in inventory');
    }

    // new value
    const Value = product.inventory.quantity - quantity > 0;

    // Update the product
    await Product.updateOne(
      { _id: productId },
      {
        $inc: { 'inventory.quantity': -quantity },
        $set: { 'inventory.inStock': Value },
      },
    );

    const orderWithProductDetails = {
      ...orderData,
      productDetails: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        tags: product.tags,
        variants: product.variants,
      },
    };

    // Create the order
    const order = new Order(orderWithProductDetails);
    const result = await order.save();

    return result;
  } catch (error) {
    throw error;
  }
};

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
  createOrder,
  getAllOrders,
};
