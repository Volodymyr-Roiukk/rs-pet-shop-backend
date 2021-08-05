'use strict';

const products = [
  {id: 1, "name": "Royal canin", "price": 200},
  {id: 2, "name": "Purina pro plan", "price": 150},
  {id: 3, "name": "Felix", "price": 100}
];

module.exports.getProductsById = async ({pathParameters}) => {
  const {productId} = pathParameters;
  const matchedProducts = products.filter(product => product.id === +productId);
  const isFindProduct = !!matchedProducts.length;

  return {
    statusCode: isFindProduct ? 200 : 404,
    body: JSON.stringify(isFindProduct ? matchedProducts : {error: "Product is not found"})
  }
};