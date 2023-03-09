import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Services from '../services';

class Product {
  service = new Services.Product();

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();

    return res.status(StatusCodes.OK).json(products);
  };
  
  create = async (req: Request, res: Response) => {
    try {
      const { name, amount } = req.body;

      const newProduct = await this.service.create(name, amount);
  
      return res.status(StatusCodes.CREATED).json(newProduct);
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: (err as Error).message });
    }
  };
}

export default Product;