const fetch = require("node-fetch").default;
const {PRODUCTS_API_PATH} = require('../constants');

module.exports.getProductsById = async ({pathParameters}) => {
  const {productId} = pathParameters;

  try {
    const response = await fetch(PRODUCTS_API_PATH);
    const products = await response.json();
    const matchedProducts = products.filter(product => product.id === +productId);
    const isFindProduct = !!matchedProducts.length;

    return {
      statusCode: isFindProduct ? 200 : 404,
      body: JSON.stringify(isFindProduct ? matchedProducts : {message: "Product is not found"})
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 404,
      body: JSON.stringify({message: `Something went wrong: ${e.message}`}),
    }
  }
};