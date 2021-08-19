import fetch from 'node-fetch';
import {PRODUCTS_API_PATH} from '../constants'

export const getProductsList = async () => {
  try {
    const response = await fetch(PRODUCTS_API_PATH);
    const products = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.stringify(products),
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.stringify({message: `Something went wrong: ${e.message}`}),
    }
  }
};