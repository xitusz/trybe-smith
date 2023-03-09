import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Jwt from './jwt';

class Auth {
  jwt = new Jwt();

  auth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    }

    const verifyToken = this.jwt.verify(authorization);
    
    if (!verifyToken) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
    }

    req.body.user = verifyToken;

    next();
  };
}

export default Auth;
