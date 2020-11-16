import { handleSubmit } from './src/js/formHandler'


describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
        // Define the input for the function, if any, in the form of variables/array

        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(handleSubmit).toBeDefined();
    })
    test("Check if the user input is string or charater type", () => {
        let formText = 'hello world ';
        expect(typeof(formText) === 'string');
    });
});