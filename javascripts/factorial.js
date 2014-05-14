// First Solutions
var simpleFactorial = function simpleFactorial(value) {
  var multiple = 1;
  if (value == 0) {
    multiple = 1;
  } else {
    for (var i = value; i>0 ;i--) {
      multiple = multiple * i;
    }
  }
   return multiple;
}


var factorialCaching = (function () {
  var cachedValues = {0:1, 20:2.432902e18, 15:1.307674e12, 10:3628800,100:9.332621544394418e157};
  return function factorialCaching(value) {
    var multiple = 1,
      a = cachedValues[value];
    if (a != undefined) {
      multiple = a;
    } else {
      for (var i = value; i>0 ;i--) {
        a = cachedValues[i];
        if (a != undefined) {
          multiple = multiple * a;
          break;
        }
        multiple = multiple * i;
      }
    }
    return multiple;
  };
})();

var factorialProgressiveCaching = (function () {
  var cachedValues = {0:1, 20:2.432902e18, 15:1.307674e12, 10:3628800,100:9.332621544394418e157};
  return function factorialProgressiveCaching(value) {
    var multiple = 1,
      a = cachedValues[value],
      cachedArray={};
    if (a != undefined) {
      multiple = a;
    } else {
      for (var i = value; i>0 ;i--) {
        a = cachedValues[i];
        if (a != undefined) {
          multiple = multiple * a;
          break;
        }
        multiple = multiple * i;
        if (i % 2 == 0) {
          cachedArray[i] = multiple;
        }
      }
      for(var i in cachedArray) {
        cachedValues[i] = multiple / cachedArray[i];
      }
    }
    return multiple;
  };
})();