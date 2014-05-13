var forlooplimits = 100000;
var generatedStringArray = (function() {
    var a = [];
    for (var i = 0; i <= forlooplimits; i++) {
        a[i]='String '+i;
    }
  return a;
})();

// var generatedObjectArray = (function() {
//     var a = [];
//     for (var i = 0; i <= forlooplimits; i++) {
//         a[i]={name:'Person ' + i, order:i, age:1,a:function(){},b:function(){}};
//     }
//   return a;
// })();



var clearTestDiv = function() {
  $("#testDiv").empty();
}

var compareFunctions = function compareFunction(funcs,preparation) {
  for(var i=funcs.length -1 ; i>=0; i--) {
    if (preparation != undefined) {
      preparation();
    }
    profileFunction(funcs[i]);
  }
}

var profileFunction = function(func) {
  console.debug('Started profiling');
  console.timeline();
  console.profile(func.name);
  func();
  console.timelineEnd();
  console.profileEnd();
  console.debug('Finished profiling');
}