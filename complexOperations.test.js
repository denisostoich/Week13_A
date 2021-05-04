import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Integration Tests', () => {
  describe('checkEmail', () => {
    it('First tests for checkEmail', () => {
      expect(complexOperations.checkEmail()).toEqual('The email should be an string');
    });
    it('Second tests for checkEmail', () => {  
      expect(complexOperations.checkEmail('')).toEqual('The email should be an string');
    });
    it('Third tests for checkEmail', () => {
      expect(complexOperations.checkEmail('@')).toEqual('The email is invalid');
    });
    it('Fourth tests for checkEmail', () => {
      expect(complexOperations.checkEmail('test@.com')).toEqual('The email is invalid');
    });
    it('Fiveth tests for checkEmail', () => {
      expect(complexOperations.checkEmail('test@radiumrocket.com')).toEqual('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('First tests for calculateArea', () => {
      expect(complexOperations.calculateArea()).toEqual('undefined is not supported');
    });
    it('Second tests for calculateArea', () => {
      expect(complexOperations.calculateArea('parallelogram', 4, 4)).toEqual('parallelogram is not supported');
    });
    it('Third tests for calculateArea', () => {
      expect(complexOperations.calculateArea('square')).toEqual('number1 and number2 should be numbers');
    });
    it('Fourth tests for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 'hola', 3)).toEqual('number1 and number2 should be numbers');
    });
    it('Fifth tests for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 3, 'hola')).toEqual('number1 and number2 should be numbers');
    });
    it('Sixth tests for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 3, 3)).toBe(9);
    });
    it('Seventh tests for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle', 3, 4)).toBe(12);
    });
    it('Eighth tests for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle', 5, 4)).toBe(10);
    });
    it('Nineth tests for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 5)).toBe(0);
    });
    it('Tenth tests for calculateArea', () => {
      expect(complexOperations.calculateArea('circle', 4)).toBe(Math.PI * 16);
    });
  });

  describe('sumGratherThan', () => {
    it('First tests for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan()).toEqual('The params should be numbers');
    });
    it('Second tests for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan('[], undefined')).toEqual('The params should be numbers');
    });
    it('Third tests for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(1, 5, 10)).toEqual('6 is less than 10');
    });
    it('Fourth tests for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(1, 5, 5)).toEqual('6 is grather than 5');
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('First tests for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays()).toEqual('The params should be arrays');
    });
    it('Second tests for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3])).toEqual('The params should be arrays');
    });
    it('Third tests for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [1])).toEqual([1]);
    });
    it('Fourth tests for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [5])).toEqual('There are not matching elements');
    });
    it('Fiveth tests for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['test',2,3], ['test', 5])).toEqual(['test']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('First tests for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 'name')).toEqual([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }]);
    });
    it('Second tests for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Guille' }], 'name')).toEqual([{ name: 'Guille' }, { name: 'Guille' }]);
    });
    it('Third tests for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'name')).toEqual('The first param should be an array');
    });
    it('Fourth tests for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 1)).toEqual('The second param should be an string');
    });
    it('Fifth tests for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], '')).toEqual('The second param should be an string');
    });
    it('Sixth tests for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { noName: 'NoName' }], 'name')).toEqual('Some elements in the array does not have the name property');
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('First test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 4, 5, 8, 9])).toEqual({even: 2, odd: 3});
    });
    it('Second test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1.3, 4.2])).toEqual({even: 0, odd: 2});
    });
    it('Third test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
    });
    it('Fifth test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 'string'])).toEqual('The array should have only numbers');
    });
  });
});