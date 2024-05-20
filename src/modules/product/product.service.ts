import { Product } from './product.model';

// product post
const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

//get all product
const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

// get single product
const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

//update product
const updateProductByIdFromDB = async (
  productId: string,
  updateData: TProduct,
) => {
  const result = await Product.findByIdAndUpdate(productId, updateData);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
};
