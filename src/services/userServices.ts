import Models from '../models';
import IUser from '../interfaces/userInterfaces';

class User {
  model = new Models.User();

  create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> => {
    const newUser = await this.model.create(username, classe, level, password);

    return newUser;
  };

  getByCredentials = async (username: string, password: string) => {
    const user = await this.model.getByCredentials(username, password);

    return user;
  };
}

export default User;