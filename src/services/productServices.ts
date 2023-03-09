import Models from '../models';
import IProduct from '../interfaces/productInterfaces';

class Product {
  model = new Models.Product();

  getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    
    return products;
  };

  create = async (name: string, amount: string): Promise<IProduct> => {
    const newProduct = await this.model.create(name, amount);

    return newProduct;
  };
}

export default Product;