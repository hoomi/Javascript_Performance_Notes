var findMultiplesFast = function findMultiplesFast() {
  var foundValues=[0];
  for (var i = 1; i<=multipleValue ; i++) {
    if (i%2 == 0 && 
    	i%10 ==0 &&
    	i%53 == 0 &&
    	i%167 == 0 &&
    	i%1290 == 0 &&
    	i%3498 == 0 &&
    	foundValues[0] == 0) {
    	foundValues.push(i);
    }
  }
}

var findMultiplesFast1 = function findMultiplesFast1() {
  var foundValues=[0];
  for (var i = 1; i<=multipleValue ; i++) {
    if (i%10 == 0 && 
      i%2 ==0 &&
      i%53 == 0 &&
      i%167 == 0 &&
      i%1290 == 0 &&
      i%3498 == 0 &&
      foundValues[0] == 0) {
      foundValues.push(i);
    }
  }
}


var findMultiplesSlow = function findMultiplesSlow() {
  var foundValues=[];
  for (var i = 0; i<=multipleValue ; i++) {
    if (foundValues[0] == 0 &&
    	i%2 == 0 && 
    	i%10 ==0 &&
    	i%53 == 0 &&
    	i%167 == 0 &&
    	i%1290 == 0 &&
    	i%3498 == 0) {
    	foundValues.push(i);
    }
  }
}

var compareFindMultiples = function compareFindMultiples()
{
  var a = [findMultiplesSlow,findMultiplesFast,findMultiplesFast1];
  compareFunctions(a);
}