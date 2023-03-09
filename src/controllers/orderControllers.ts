import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Services from '../services';

class Order {
  service = new Services.Order();

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.getAll();

    return res.status(StatusCodes.OK).json(orders);
  };

  create = async (req: Request, res: Response) => {
    try {
      const { productsIds } = req.body;
      
      const userId = req.body.user.id;

      const newOrder = await this.service.create(userId, productsIds);

      return res.status(StatusCodes.CREATED).json(newOrder);
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: (err as Error).message });
    }
  };
}

export default Order;