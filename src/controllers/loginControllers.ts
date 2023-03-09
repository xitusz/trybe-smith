import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Jwt from '../middlewares/jwt';
import Services from '../services';

class Login {
  service = new Services.User();
  
  jwt = new Jwt();

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      const payload = await this.service.getByCredentials(username, password);

      const token = this.jwt.sign(payload);
  
      return res.status(StatusCodes.OK).json({ token });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: (err as Error).message });
    }
  };
}

export default Login;
