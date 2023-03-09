import { Router } from 'express';
import Controllers from '../controllers';
import Validations from '../middlewares';

const router = Router();

const user = new Controllers.User();
const validation = new Validations.User();

router.post(
  '/users',
  validation.usernameValidation,
  validation.classeValidation,
  validation.levelValidation,
  validation.passwordValidation,
  user.create,
);

export default router;