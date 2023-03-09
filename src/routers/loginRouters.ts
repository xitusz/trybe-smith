import { Router } from 'express';
import Controllers from '../controllers';
import Validations from '../middlewares';

const router = Router();

const login = new Controllers.Login();
const validation = new Validations.Login();

router.post(
  '/login',
  validation.usernameValidation,
  validation.passwordValidation,
  validation.credentialsValidation,
  login.login,
);

export default router;