import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

class Order {
  productsValidation = (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;

    if (!productsIds) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: '"productsIds" is required' });
    }
    
    if (productsIds.length === 0) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"productsIds" must include only numbers' }); 
    }

    if (!Array.isArray(productsIds)) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"productsIds" must be an array' });
    }

    next();
  };
}

export default Order;