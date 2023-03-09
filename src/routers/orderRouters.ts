import { Router } from 'express';
import Controllers from '../controllers';
import Validations from '../middlewares';

const router = Router();

const order = new Controllers.Order();
const validation = new Validations.Order();
const token = new Validations.Auth();

router.get('/orders', order.getAll);

router.post(
  '/orders',
  token.auth,
  validation.productsValidation,
  order.create,
);

export default router;