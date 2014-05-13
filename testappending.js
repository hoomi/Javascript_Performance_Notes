var testUsingJuery =  function testUsingJuery() {
  var $testDiv = $("#testDiv");
  for (var i = 2000; i--;) {
    $testDiv.append("<p>This is a test line</p>");
  }
}

var testUsingTemplates = function testUsingTemplates() {
  var $testDiv = $("#testDiv"),
    template = _.template($("script.template").html()),
    domElement = template();
  for (var i = 2000; i--;) {
    $testDiv.append(domElement);
  }
}

var testUsingJavascript = function testUsingJavascript() {
  var testDiv = document.getElementById('testDiv'),
    p;
  for (var i = 2000; i--;) {
    p = document.createElement('p');
    p.textContent = "This is a test line";
    testDiv.appendChild(p);
  }
}

var testUsingDocumentFragment = function testUsingDocumentFragment() {
  var testDiv = document.getElementById('testDiv'),
    fragment = document.createDocumentFragment(),
    p;
  for (var i = 2000; i--;) {
    p = document.createElement('p');
    p.textContent = "This is a test line";
    fragment.appendChild(p);
  }
  testDiv.appendChild(fragment);
}

var compareAppends = function() {
  var a = [testUsingJuery, testUsingTemplates, testUsingJavascript, testUsingDocumentFragment];
  compareFunctions(a,clearTestDiv);
}