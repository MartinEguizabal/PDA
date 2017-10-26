var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  })

  it('it can subtract a number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('it can multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('it can divide a number by another', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('it can display multiple numbers when clicked', function(){
    calculator.numberClick(3);
    calculator.numberClick(9);
    calculator.numberClick(4);
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 3941);
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    calculator.operatorClick('*');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 16);
  })

  it('it can clear runningTotal without clearing previousTotal', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.clearClick();
    assert.equal(calculator.previousTotal, 7);
  })

  it('it can clear runningTotal', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

  it('it can clear previousTotal if runningTotal already cleared', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.clearClick();
    calculator.clearClick();
    assert.equal(calculator.previousTotal, null);
  })
});

