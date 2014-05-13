var forlooplimits = 1000;
var sumUpValue = 50000000;
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

var profileFunction = function(func, preparation) {
  if (preparation != undefined) {
    preparation();
  }
  console.debug('Started profiling');
  console.profile(func.name);
  console.time(func.name);
  console.log(func());
  console.timeEnd(func.name);
  console.profileEnd();
  console.debug('Finished profiling');
}


var timelineFunction =  function(func) {
  console.debug('Timeline started');
  console.timeline();
  func();
  console.timelineEnd();
  console.debug('Timeline ended');
}