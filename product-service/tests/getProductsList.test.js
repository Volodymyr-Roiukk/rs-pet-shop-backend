const {getProductsList} = require('../handlers/getProductsList');

const defaultProducts = [
  {id: 1, name: "product1", price: 20},
  {id: 2, name: "product2", price: 30},
  {id: 3, name: "product3", price: 40},
  {id: 4, name: "product4", price: 100},
  {id: 5, name: "product5", price: 312},
  {id: 6, name: "product6", price: 44},
  {id: 7, name: "product7", price: 204},
  {id: 8, name: "product8", price: 2021},
  {id: 9, name: "product9", price: 201},
  {id: 10, name: "product10", price: 20123}
];

describe('getProductsList handler tests', () => {
  test('getProductsList should return response with status code 200', async () => {
    const {statusCode} = await getProductsList();
    
    expect(statusCode).toBe(200);
  });

  test('getProductsList should return response with products list', async () => {
    const {body} = await getProductsList();
    const products = JSON.parse(body);
    
    expect(products).toEqual(defaultProducts);
  });
});