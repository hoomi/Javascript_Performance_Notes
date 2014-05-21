
// First Solutions
var sumUpTo = function sumUpTo(value) {
  var sum = 0;
  for (var i = value; i>=0 ;i--) {
    sum += i;
  };
   return sum;
}

//Tried optimizing the first solution (failed)
// It is slower than a normal for  loop because it has to check cachedValues[i] == undefined on every loop
var optimizedSumUpTo =  (function() {
  var cachedValues = {0:0, 10:55, 100:5050, 200:20100, 300:45150, 1000:500500, 10000: 50005000, 100000:5000050000};
    return function optimizedSumUpTo(value) {
      var sum = 0
        a=cachedValues[value];
      if ( a != undefined) {
        return a;
      }
      var i = value;
      while(i >= 0 && cachedValues[i] == undefined) {
        sum += i--; 
      }
      sum += cachedValues[i];
      return sum;
    };
})();


var moreOptimizedSumUpTo =  (function() {
  var cachedValues = {0:0, 10:55, 100:5050, 200:20100, 300:45150, 1000:500500, 10000: 50005000, 100000:5000050000};
    return function moreOptimizedSumUpTo(value) {
      var sum = 0
        a=cachedValues[value];
      if ( a != undefined) {
        return a;
      }
      var i = value;
      while(i >= 0) {
        sum += i--; 
        if (((i >= 100 && (i % 100 == 0)) || (i == 10)) && cachedValues[i] != undefined) {
            break;
        }
      }
      if (i >= 0) {
         sum += cachedValues[i];
      }
      return sum;
    };
})();

// Optimizing another way
var adaptiveOptimizedSumUpTo =  (function() {
  var cachedValues = {0:0, 10:55, 100:5050, 200:20100, 300:45150, 1000:500500, 10000: 50005000, 100000:5000050000};
    return function adaptiveOptimizedSumUpTo(value) {
      var sum = 0,
        a = cachedValues[value],
        cachedArray={};
      if (a != undefined) {
        return a;
      }
      for (var i = value; i >= 0;i--) {


        //Slow solution
        // a = cachedValues[i];
        // if (((i >= 100 && (i % 100 == 0)) || (i == 10)) && a != undefined) {
        //   sum += a;
        //   break;
        // }

        //Cached already
        if (((i >= 100 && (i % 100 == 0)) || (i == 10)) && cachedValues[i] != undefined) {
          sum += cachedValues[i];
          break;
        }
        if (i % 100 == 0) {
          cachedArray[i]=sum;
        }
        sum += i;
      }
      for (var i in cachedArray) {
        cachedValues[i] = sum - cachedArray[i];
      }
      return sum;
    }
})();

// Remembered the easy way
var easySolution = function easySolution(value) {
    return 0.5 * (value) * (value + 1);
}

