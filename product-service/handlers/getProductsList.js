'use strict';

const products = [
  {id: 1, "name": "Royal canin", "price": 200},
  {id: 2, "name": "Purina pro plan", "price": 150},
  {id: 3, "name": "Felix", "price": 100}
];

module.exports.getProductsList = async () => ({
  statusCode: 200,
  body: JSON.stringify(products),
});