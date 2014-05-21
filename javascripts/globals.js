var forlooplimits = 1000000;
var paragraphNumbers = 1000;
var sumUpValue = 49000099;
var factorialValue = 170;

var generatedStringArray = (function() {
    var a = [];
    for (var i = 0; i <= forlooplimits; i++) {
        a[i]='String '+i;
    }
  return a;
})();

var clearTestDiv = function() {
  $('#testDiv').empty();
}

var compareFunctions = function compareFunctions(funcs,preparation) {
  for(var i=funcs.length -1 ; i>=0; i--) {
    profileFunction(funcs[i],preparation);
  }
}

var timeLineFunctions = function timeLineFunctions(funcs,preparation) {
   for(var i=funcs.length -1 ; i>=0; i--) {
    profileFunction(funcs[i],preparation);
  }
}

var profileFunction = function(func, preparation, args) {
  if (preparation != undefined) {
    preparation();
  }
  console.debug('Started profiling');
  console.profile(func.name);
  console.time(func.name);
  func(args);
  console.timeEnd(func.name);
  console.profileEnd();
  console.debug('Finished profiling');
}


var timelineFunction =  function(func, preparation) {
  console.debug('Timeline started');
  console.timeline();
  func();
  console.timelineEnd();
  console.debug('Timeline ended');
}