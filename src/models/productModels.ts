import IProduct from '../interfaces/productInterfaces';
import connetion from './connection';

class Product {
  getAll = async (): Promise<IProduct[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    
    const [products] = await connetion.execute(query);

    return products as IProduct[];
  };

  create = async (name: string, amount: string): Promise<IProduct> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)';

    const [product] = await connetion.execute(query, [name, amount]);

    return {
      id: (product as { insertId: number }).insertId,
      name,
      amount,
    };
  };

  getById = async (id: number): Promise<IProduct[]> => {
    const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?';
    
    const [product] = await connetion.execute(query, [id]);

    return product as IProduct[];
  };

  update = async (orderId: number, productsIds: number[]) => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id IN (?)';

    const [product] = await connetion.execute(query, [orderId, ...productsIds]);

    return product;
  };
}

export default Product;