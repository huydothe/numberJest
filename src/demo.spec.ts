import {BasicCalculator} from "./demo";

describe("Test",()=>{
    let basicCalculator=new BasicCalculator()
    test("Should return the addition of a + b ",()=>{
        expect(basicCalculator.add(2,3)).toEqual(5);
        expect(basicCalculator.add(6,6)).toEqual(12);
        expect(basicCalculator.add(9,9)).toEqual(18);
    });
    test("Should return the subtraction of a - b ",()=>{
        expect(basicCalculator.subtract(2,3)).toEqual(-1);
        expect(basicCalculator.subtract(6,6)).toEqual(0);
        expect(basicCalculator.subtract(9,7)).toEqual(2);
    });
    test("Should return the multiple of a+b ",()=>{
        expect(basicCalculator.multiple(2,3)).toEqual(6);
        expect(basicCalculator.multiple(6,6)).toEqual(36);
        expect(basicCalculator.multiple(9,9)).toEqual(81);
    });
    test("Should return the divide of a+b ",()=>{
        expect(basicCalculator.divide(6,3)).toEqual(2);
        expect(basicCalculator.divide(6,12)).toEqual(0.5);
        expect(basicCalculator.divide(9,9)).toEqual(1);
    });
})