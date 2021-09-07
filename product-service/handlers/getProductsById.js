import { Client } from 'pg';
import { dbOptions } from '../db/constants';

export const getProductsById = async (e) => {
  const { productId } = e.pathParameters;
  const client = new Client(dbOptions);
  console.log('req: ', e);

  try {
    await client.connect();
    const { rows: products } = await client.query(`
      select p.id, title, description, price, count
      from products p left join stocks s
      on p.id = s.product_id
      where p.id = '${productId}'
    `);
    const isFindProduct = !!products.length;

    return {
      statusCode: isFindProduct ? 200 : 404,
      body: JSON.stringify(isFindProduct ? products : {message: "Product is not found"})
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 500,
      body: JSON.stringify({message: `Something went wrong in DB: ${e.message}`}),
    }
  } finally {
    await client.end();
  }
};