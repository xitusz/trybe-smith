import IOrder from '../interfaces/orderInterfaces';
import ProductModel from './productModels';
import connetion from './connection';

class Order {
  productModel = new ProductModel();

  getAll = async (): Promise<IOrder[]> => {
    const query = 'SELECT * FROM Trybesmith.Orders';
  
    const [order] = await connetion.execute(query);
  
    const orders = order as IOrder[];
  
    const products = await Promise.all(orders.map(({ id }) => this.productModel.getById(id)));
  
    const result = orders.map((ids, i) => (
      {
        ...ids,
        productsIds: products[i].map(({ id }) => id),
      }
    ));
  
    return result;
  };

  create = async (userId: number) => {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    
    const [order] = await connetion.execute(query, [userId]);

    return (order as { insertId: number }).insertId;
  };
}

export default Order;