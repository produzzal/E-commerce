import express, { NextFunction, Request, Response } from 'express';
import { ProductRoutes } from './modules/product/product.router';
import { OrderRoutes } from './modules/order/order.router';
const app = express();

//parsers
app.use(express.json());

//route for products
app.use('/api/products', ProductRoutes);

//route for orders
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
