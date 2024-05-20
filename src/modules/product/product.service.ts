import { Product } from './product.model';

const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProductsFromDB,
};
