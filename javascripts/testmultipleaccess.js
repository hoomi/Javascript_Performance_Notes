var testMultipleJqueryAccess =  function testMultipleJqueryAccess() {
  for (var i = paragraphNumbers; i--;) {
    $("#testDiv").append("<p>This is a test line</p>");
  }
}

var testJqueryWithCaching =  function testJqueryWithCaching() {
  var $testDiv = $("#testDiv");
  for (var i = paragraphNumbers; i--;) {
    $testDiv.append("<p>This is a test line</p>");
  }
}

var compareCaching = function() {
  var a = [testMultipleJqueryAccess, testJqueryWithCaching];
  compareFunctions(a,clearTestDiv);
}