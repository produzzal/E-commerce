import { Request, Response } from 'express';
import { ProductServices } from './product.service';

//product post
const createProductToDB = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await ProductServices.createProduct(movieData);
  res.json({
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
};

//all products get

const getAllProductsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
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
      message: 'Something went wrong!',
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
      message: 'Something went wrong!',
      data: error,
    });
  }
};

export const ProductControlers = {
  createProductToDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
};
