
var testConcatOneLine = function testConcatOneLine() {
  var a = "";
  for (var i = 0; i < forlooplimits; i++) {
      a += "X" + "Y" + "z"+ "w" + "ef" + "fwf" + "fwef" ;
  }
}

var testConcatTwoLines = function testConcatTwoLines() { 
  var a = "";
  for (var i = 0; i < forlooplimits; i++) {
      a += "X";
      a += "Y";
      a += "z";
      a += "w";
      a += "ef";
      a += "fwf";
      a += "fwef";
  }
}

var compareConcatinationsFuncs = function compareConcatinationsFuncs()
{
  var a = [testConcatOneLine,testConcatTwoLines];
  compareFunctions(a);
}