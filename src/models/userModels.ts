import { RowDataPacket } from 'mysql2';
import IUser from '../interfaces/userInterfaces';
import connetion from './connection';

class User {
  create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> => {
    const query = `
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)
    `;

    const [user] = await connetion.execute(query, [username, classe, level, password]);

    return {
      id: (user as { insertId: number }).insertId,
      username,
      classe,
      level,
      password,
    };
  };

  getByCredentials = async (username: string, password: string) => {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';

    const [user] = await connetion.execute<RowDataPacket[]>(query, [username, password]);

    return user[0] as IUser;
  };
}

export default User;