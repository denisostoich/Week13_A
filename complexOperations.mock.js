import 'jest';

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(8);
let multip = jest.fn().mockReturnValue(12);
let division = jest.fn().mockReturnValue(10);
let exponent = jest.fn().mockReturnValue(2);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue([2, 'test']);
let sortArrayByKey = jest.fn().mockReturnValue([{ name: 'David' }, { name: 'Guille' }, { name: 'Rodrigo' }], 'name');
let getEvenNumbersFromArray = jest.fn().mockReturnValue([2, 4, 6]);
let getOddNumbersFromArray = jest.fn().mockReturnValue([1, 3, 5]);

const funcMock = jest.mock('./basicOperations.js', () => {
    return {
        isNumber,
        isArray,
        isString,
        validateEmail,
        sum,
        multip,
        division,
        exponent,
        isSupportedFigure,
        arrayElementsAreObjectWithKey,
        arrayIntersection,
        sortArrayByKey,
        getEvenNumbersFromArray,
        getOddNumbersFromArray
    }
});