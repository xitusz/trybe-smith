import { sign, verify } from 'jsonwebtoken';
import IUser from '../interfaces/userInterfaces';

const JWT_SECRET = 'muitosecreto';

class Jwt {
  sign = ({ id, username }: IUser) => {
    try {
      const token = sign({ id, username }, JWT_SECRET, {
        expiresIn: '7d',
        algorithm: 'HS256',
      });
    
      return token;
    } catch (err) { 
      return (err as { message: string }).message;
    }
  };

  verify = (token: string) => {
    try {
      const decoded = verify(token, JWT_SECRET);

      return decoded;
    } catch (err) {
      return false;
    }
  };
}

export default Jwt;
