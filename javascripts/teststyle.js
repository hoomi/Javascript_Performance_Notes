var addingCSSSlow = function addingCSSSlow() {
  var myElement = document.getElementById('imageDiv');
  myElement.style.borderLeft = '3px';
  myElement.style.borderRight = '3px';
  myElement.style.borderTop = '3px';
  myElement.style.borderBottom = '3px';
  myElement.style.padding = '5px';
  myElement.style.backgroundColor = 'black';
  
}

var addingCSSFast = function addingCSSFast() {
  var myElement = document.getElementById('imageDiv');
  myElement.style.cssText = 'border-left: 3px; border-right: 3px; border-top: 3px; border-bottom:3px; padding: 5px;background-color:black;';
}

var resetCSS = function resetCSS() {
   var myElement = document.getElementById('imageDiv');
  myElement.style.cssText = 'border-left: 0px; border-right: 0px; border-top: 0px; border-bottom:0px; padding: 5px;background-color:transparent;';
}


var compareStyleFastAndSlow =  function compareStyleFastAndSlow() {
  var a = [addingCSSSlow,addingCSSFast];
  compareFunctions(a,resetCSS);
  resetCSS();
}


