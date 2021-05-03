import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      expect(complexOperations.checkEmail()).toEqual('The email should be an string');
      expect(complexOperations.checkEmail('')).toEqual('The email should be an string');
      expect(complexOperations.checkEmail('@')).toEqual('The email is invalid');
      expect(complexOperations.checkEmail('test@.com')).toEqual('The email is invalid');
      expect(complexOperations.checkEmail('test@radiumrocket.com')).toEqual('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('first test for calculateArea', () => {
      expect(complexOperations.calculateArea()).toEqual('undefined is not supported');
      expect(complexOperations.calculateArea('square')).toEqual('number1 and number2 should be numbers');
      expect(complexOperations.calculateArea('square', 'hola', 3)).toEqual('number1 and number2 should be numbers');
      expect(complexOperations.calculateArea('square', 3, 'hola')).toEqual('number1 and number2 should be numbers');
      expect(complexOperations.calculateArea('square', 3, 3)).toBe(9);
      expect(complexOperations.calculateArea('rectangle', 3, 4)).toBe(12);
      expect(complexOperations.calculateArea('triangle', 5, 4)).toBe(10);
      expect(complexOperations.calculateArea('square', 5)).toBe(0);
      expect(complexOperations.calculateArea('circle', 4)).toBe(Math.PI * 16);
    });
  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan()).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan('[], undefined')).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan(1, 5, 10)).toEqual('6 is less than 10');
      expect(complexOperations.sumGratherThan(1, 5, 5)).toEqual('6 is grather than 5');
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays()).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays([1,2,3])).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [1])).toEqual([1]);
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [5])).toEqual('There are not matching elements');
      expect(complexOperations.intersectionBetweenArrays(['test',2,3], ['test', 5])).toEqual(['test']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 'name')).toEqual([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }]);
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'name')).toEqual('The first param should be an array');
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 1)).toEqual('The second param should be an string');
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], '')).toEqual('The second param should be an string');
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { noName: 'NoName' }], 'name')).toEqual('Some elements in the array does not have the name property');
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 4, 5, 8, 9])).toEqual({even: 2, odd: 3});
      expect(complexOperations.numberOfOddAndEvenNumbers([1.3, 4.2])).toEqual({even: 0, odd: 2});
      expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 'string'])).toEqual('The array should have only numbers');
    });
  });
});