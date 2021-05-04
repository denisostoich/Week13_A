import funcMock from "./complexOperations.mock";
import * as complexOperationsMocked from './complexOperations';

describe('complexOperation - Mock Integration Tests', () => {
    describe('checkEmail', () => {
        it('First tests for checkEmail', () => {
            expect(complexOperationsMocked.checkEmail()).toEqual('The email should be an string');
        });
        it('Second tests for checkEmail', () => {    
            expect(complexOperationsMocked.checkEmail('')).toEqual('The email should be an string');
        });
        it('Third tests for checkEmail', () => {
            expect(complexOperationsMocked.checkEmail('@')).toEqual('The email is valid');
        });
        it('Fourth tests for checkEmail', () => {    
            expect(complexOperationsMocked.checkEmail('test@.com')).toEqual('The email is valid');
        });
        it('Fifth tests for checkEmail', () => {    
            expect(complexOperationsMocked.checkEmail('test@radiumrocket.com')).toEqual('The email is valid');
        });
    });

    describe('calculateArea', () => {
        it('First test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea()).toEqual('undefined is not supported');
        });
        it('Second test for calculateArea', () => {    
            expect(complexOperationsMocked.calculateArea('parallelogram', 4, 4)).toEqual('parallelogram is not supported');
        });
        it('Third test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('square')).toBe(12);
        });
        it('Fourth test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('square', 'hola', 3)).toBe(12);
        });
        it('Fifth test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('square', 3, 'hola')).toBe(12);
        });
        it('Sixth test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('square', 3, 3)).toBe(12);
        });
        it('Seventh test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('rectangle', 3, 4)).toBe(12);
        });
        it('Eighth test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('triangle', 5, 4)).toBe(10);
        });
        it('Nineth test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('square', 5)).toBe(12);
        });
        it('Tenth test for calculateArea', () => {
            expect(complexOperationsMocked.calculateArea('circle', 4)).toBe(Math.PI * 2);
        });
    });

    describe('sumGraterThan', () => {
        it('First test for sumGraterThan', () => {
            expect(complexOperationsMocked.sumGratherThan()).toEqual('8 is less than undefined');
        });
        it('Second test for sumGraterThan', () => {
            expect(complexOperationsMocked.sumGratherThan('[], undefined')).toEqual('8 is less than undefined');
        });
        it('Third test for sumGraterThan', () => {
            expect(complexOperationsMocked.sumGratherThan(1, 5, 10)).toEqual('8 is less than 10');
        });
        it('Fourth test for sumGraterThan', () => {
            expect(complexOperationsMocked.sumGratherThan(1, 5, 5)).toEqual('8 is grather than 5');
        });
    });

    describe('intersectionBetweenArrays', () => {
        it('First test for intersectionBetweenArrays', () => {
            expect(complexOperationsMocked.intersectionBetweenArrays()).toEqual([2, 'test']);
        });
        it('Second test for intersectionBetweenArrays', () => {    
            expect(complexOperationsMocked.intersectionBetweenArrays([1,2,3])).toEqual([2, 'test']);
        });
        it('Third test for intersectionBetweenArrays', () => {    
            expect(complexOperationsMocked.intersectionBetweenArrays([1,2,3], [1])).toEqual([2, 'test']);
        });
        it('Fourth test for intersectionBetweenArrays', () => {    
            expect(complexOperationsMocked.intersectionBetweenArrays([1,2,3], [5])).toEqual([2, 'test']);
        });
        it('Fifth test for intersectionBetweenArrays', () => {    
            expect(complexOperationsMocked.intersectionBetweenArrays(['test',2,3], ['test', 5])).toEqual([2, 'test']);
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        it('First test for sortArrayOfObjectsByKey', () => {
            expect(complexOperationsMocked.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 'name')).toEqual([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }]);
        });
        it('Second test for sortArrayOfObjectsByKey', () => {    
            expect(complexOperationsMocked.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Guille' }], 'name')).toEqual([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }]);
        });
        it('Third test for sortArrayOfObjectsByKey', () => {    
            expect(complexOperationsMocked.sortArrayOfObjectsByKey(undefined, 'name')).toEqual([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }]);
        });
        it('Fourth test for sortArrayOfObjectsByKey', () => {    
            expect(complexOperationsMocked.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 1)).toEqual([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }]);
        });
        it('Fiveth test for sortArrayOfObjectsByKey', () => {    
            expect(complexOperationsMocked.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], '')).toEqual('The second param should be an string');
        });
        it('Sixth test for sortArrayOfObjectsByKey', () => {    
            expect(complexOperationsMocked.sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { noName: 'NoName' }], 'name')).toEqual([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }]);
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        it('First test for numberOfOddAndEvenNumbers', () => {
            expect(complexOperationsMocked.numberOfOddAndEvenNumbers([1, 4, 5, 8, 9])).toEqual({even: 3, odd: 3});
        });
        it('Second test for numberOfOddAndEvenNumbers', () => {
            expect(complexOperationsMocked.numberOfOddAndEvenNumbers([1.3, 4.2])).toEqual({even: 3, odd: 3});
        });
        it('Third test for numberOfOddAndEvenNumbers', () => {
            expect(complexOperationsMocked.numberOfOddAndEvenNumbers()).toEqual({even: 3, odd: 3});
        });
        it('Fourth test for numberOfOddAndEvenNumbers', () => {
            expect(complexOperationsMocked.numberOfOddAndEvenNumbers([1, 'string'])).toEqual({even: 3, odd: 3});
        });
    });
});