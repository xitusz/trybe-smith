import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Jwt from '../middlewares/jwt';
import Services from '../services';

class User {
  service = new Services.User();

  jwt = new Jwt();

  create = async (req: Request, res: Response) => {
    try {
      const { username, classe, level, password } = req.body;

      const payload = await this.service.create(username, classe, level, password);

      const token = this.jwt.sign(payload);
  
      return res.status(StatusCodes.CREATED).json({ token });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: (err as Error).message });
    }
  };
}

export default User;
