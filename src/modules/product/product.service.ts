import { Product } from './product.model';

// product post
const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

//get all product
const getAllProductsFromDB = async (searchTerm: string) => {
  let products;
  if (searchTerm) {
    products = await Product.find({
      name: { $regex: searchTerm as string, $options: 'i' },
    });
    return products;
  } else {
    products = await Product.find();
    return products;
  }
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
  const options = { new: true };

  const result = await Product.findByIdAndUpdate(
    productId,
    updateData,
    options,
  );
  return result;
};

// delete product
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return null;
};

export const ProductServices = {
  createProduct,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductFromDB,
};
