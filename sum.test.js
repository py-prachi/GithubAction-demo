//import sum from './sum';
//import sum from "./sum";
const add = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
  
});

test('adds 2 + 4 to equal 4', () => {
    expect(add(2, 4)).toBe(4);
    
  });