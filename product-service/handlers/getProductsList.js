const fetch = require("node-fetch").default;
const {PRODUCTS_API_PATH} = require('../constants');

module.exports.getProductsList = async () => {
  try {
    const response = await fetch(PRODUCTS_API_PATH);
    const products = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 404,
      body: JSON.stringify({message: `Something went wrong: ${e.message}`}),
    }
  }
};