import { Router } from 'express';
import Controllers from '../controllers';
import Validations from '../middlewares';

const router = Router();

const product = new Controllers.Product();
const validation = new Validations.Product();

router.get('/products', product.getAll);

router.post(
  '/products',
  validation.nameValidation,
  validation.amountValidation,
  product.create,
);

export default router;