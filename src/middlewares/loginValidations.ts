import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Services from '../services';

class Login {
  service = new Services.User();

  usernameValidation = (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;

    if (!username) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: '"username" is required' });
    }

    next();
  };
  
  passwordValidation = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: '"password" is required' });
    }

    next();
  };

  credentialsValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const user = await this.service.getByCredentials(username, password);

    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Username or password invalid' });
    }

    next();
  };
}

export default Login;