import { Client } from 'pg';
import { dbOptions } from '../db/constants';

export const getProductsList = async (e) => {
  const client = new Client(dbOptions);
  console.log('req: ', e);

  try {
    await client.connect();
    const { rows: products } = await client.query(`
      select p.id, title, description, price, count
      from products p left join stocks s 
      on p.id = s.product_id
    `);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(products),
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({message: `Something went wrong: ${e.message}`}),
    }
  } finally {
    await client.end();
  }
};