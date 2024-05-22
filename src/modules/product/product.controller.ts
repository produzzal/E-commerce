import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productValidationSchema } from './product.zod.validation';

//product post
const createProductToDB = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // zod validation

    const zodParseData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProduct(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
    return result;
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

//all products get

const getAllProductsFromDB = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.getAllProductsFromDB(
      searchTerm as string,
    );
    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term ${result[0].name} fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'products fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      data: error,
    });
  }
};

// products get by id

const getProductByIdFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductByIdFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'product not found',
      data: error,
    });
  }
};

// update product

const updateProductByIdFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await ProductServices.updateProductByIdFromDB(
      productId,
      updateData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      data: error,
    });
  }
};

//Delete product
const DeleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      data: error,
    });
  }
};

export const ProductControlers = {
  createProductToDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  DeleteProduct,
};
