describe('Protractor Demo App', function() {
  
  it('comparing two numbers', function() {
	let firstNumber = 15;
	let secondNumber = 24;
	let sum = firstNumber + secondNumber;
    expect(sum).toEqual(39);
  });
  
  it('comparison of two strings for complete match', function() {
	  let firstString = 'Testing for protractor';
	  let secondString = 'Testing for protractor';
	  expect(firstString).toEqual(secondString);
  });
  
  it('compare two strings for partial match', function() {
	  let String1 = 'Testing for protractor';
	  let String2 = 'protractor';
	  expect(String1).toMatch(String2); 
  });
  
   it('comparison of two arrays', function() {
	  let Array1 = [13, 5, 9];
	  let Array2 = [13, 5, 9];
	  expect(Array1).toEqual(Array2); 
  });
  
   it('compare array of strings', function() {
	  let firstArray = ['apple', 'pear', 'orange'];
	  let secondArray = ['apple', 'pear', 'orange'];
	  expect(firstArray).toEqual(secondArray); 
  });
});
