//import sum from './sum';
//import sum from "./sum";
const add = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
  
});

test('adds 1 + 1 to equal 3', () => {
    expect(add(1, 1)).toBe(3);
    
  });