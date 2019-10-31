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


  it('should add two integers and return the sum', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  });

  it('should subtract an integer from another integer and return the result', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should multiply an integer and return teh result', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it('should divide an integer an return the result', function(){
    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 4);
  });

  it('should concatenate multiple number button clicks', function (){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 20114);
  });

  it('should chain multiple operations together', function (){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.add(2);
    const result = calculator.runningTotal;
    assert.equal(result, 7)
  });

  it('should clear the running total without affecting the calculation', function(){
  calculator.numberClick(1);
  calculator.operatorClick("+");
  calculator.numberClick(1);
  calculator.clearClick();
  calculator.numberClick(9);
  calculator.operatorClick("=");
  const result = calculator.previousTotal;
  assert.equal(result, 10)

})

});
