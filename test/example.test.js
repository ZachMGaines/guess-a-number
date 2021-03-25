// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { guessGame } from '../utils.js';
const test = QUnit.test;

test('This test should take in two of the same numbers and return 0', (expect) => {
    const correct = 6;
    const guess = 6;
    
    const expected = 0;
       
    const actual = guessGame(guess, correct);

    expect.equal(actual, expected);
});

test('This test should take in two different numbers and return -1', (expect) => {
    const correct = 5;
    const guess = 3;
    
    const expected = -1;
    const actual = guessGame(guess, correct);
    
    expect.equal(actual, expected);
});
    
test('This test should take in 2 numbers and return 1', (expect) => {
    const correct = 6;
    const guess = 7;
        
    const expected = 1;
    const actual = guessGame(guess, correct);
        
    expect.equal(actual, expected);
});