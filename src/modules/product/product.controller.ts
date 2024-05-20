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
  } catch (error) {
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
};
