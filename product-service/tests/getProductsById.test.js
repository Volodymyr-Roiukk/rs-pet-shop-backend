const {getProductsById} = require('../handlers/getProductsById');

describe('getProductsById handler tests', () => {
  test('getProductsById should return response with status code 200', async () => {
    const event = {pathParameters: {productId: 2}};
    const {statusCode} = await getProductsById(event);
    
    expect(statusCode).toBe(200);
  });

  test('getProductsById should return response with only one product array', async () => {
    const event = {pathParameters: {productId: 7}};
    const {body} = await getProductsById(event);
    const products = JSON.parse(body);
    
    expect(products.length).toBe(1);
  });

  test('getProductsById should return response with status code 404 if product not found', async () => {
    const event = {pathParameters: {productId: -1}};
    const {statusCode} = await getProductsById(event);
    
    expect(statusCode).toBe(404);
  });

  test('getProductsById should return response with error message "Product not found"', async () => {
    const expError = {message: "Product is not found"};
    const event = {pathParameters: {productId: -1}};
    const {body} = await getProductsById(event);
    const error = JSON.parse(body);
    
    expect(error).toEqual(expError);
  });
});