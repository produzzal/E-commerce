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
const updateProductByIdFromDB = async (id: string, updateData: TProduct) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, updateData);
  return result;
};

// delete product
const deleteProductFromDB = async (id: string) => {
  console.log(id);
  const result = await Product.updateOne({ _id: id }, { isDeleted: true });
  console.log(result);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductFromDB,
};
