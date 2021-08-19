const {getProductsList} = require('../handlers/getProductsList');

const defaultProducts = [
  {
    id: 1,
    title: "Royal Canin Sterilised",
    description: "The best premium food for your cats",
    price: 19.99
  },
  {
    id: 2,
    title: "Royal Canin British Shorthair",
    description: "The best premium food for your cats",
    price: 14.99
  },
  {
    id: 3,
    title: "Royal Canin Sensible 33",
    description: "The best premium food for your cats",
    price: 9.99
  },
  {
    id: 4,
    title: "Royal Canin Kitten",
    description: "The best premium food for your cats",
    price: 9.99
  },
  {
    id: 5,
    title: "Royal Canin Indoor 27",
    description: "The best premium food for your cats",
    price: 19.99
  },
  {
    id: 6,
    title: "Royal Canin Hair & Skin Care",
    description: "The best premium food for your cats",
    price: 19.99
  },
  {
    id: 7,
    title: "Royal Canin Urinary Care",
    description: "The best premium food for your cats",
    price: 14.99
  },
  {
    id: 8,
    title: "Royal Canin Babycat",
    description: "The best premium food for your cats",
    price: 14.99
  },
  {
    id: 9,
    title: "Royal Canin Hairball Care",
    description: "The best premium food for your cats",
    price: 19.99
  },
  {
    id: 10,
    title: "Royal Canin Exigent Savour Sensation",
    description: "The best premium food for your cats",
    price: 20.99
  }
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