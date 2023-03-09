import Models from '../models';

class Order {
  model = new Models.Order();
  
  product = new Models.Product();

  getAll = async () => {
    const orders = await this.model.getAll();
    
    return orders;
  };

  create = async (userId: number, productsIds: number[]) => {
    const orderId = await this.model.create(userId);

    await this.product.update(orderId, productsIds);

    return {
      userId,
      productsIds,
    };
  };
}

export default Order;