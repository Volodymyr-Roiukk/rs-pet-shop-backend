import { Client } from "pg";
import { dbOptions } from "../db/constants";

export const createNewProduct = async (e) => {
  const {body} = e;
  const client = new Client(dbOptions);
  const {title, description, price, count} = JSON.parse(body);
  console.log('req: ', e);
  console.log('req body: ', body);

  try {
    await client.connect();
    const { rows } = await client.query(`
      insert into products (title, description, price) values
      ('${title}', '${description}', ${price})
      returning *
    `);
    const createdProduct = rows[0];

    createdProduct.count = count;
    await client.query(`
      insert into stocks (product_id, count) values
      ('${createdProduct.id}', ${count})
    `);
    
    return {
      statusCode: 200,
      body: JSON.stringify(createdProduct),
    }
  } catch(e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 500,
      body: JSON.stringify({message: `Something went wrong in DB: ${e.message}`}),
    }
  } finally {
    await client.end();
  }
}