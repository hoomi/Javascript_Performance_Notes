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

var addCssJquery = function addCssJquery() {
  var $myElement = $('#imageDiv');
  $myElement.css('border-left','3px');
  $myElement.css('border-right','3px');
  $myElement.css('border-top','3px');
  $myElement.css('border-bottom','3px');
  $myElement.css('padding','5px');
  $myElement.css('background-color','black');
}

var addCssClass = function addCssClass() {
  var $myElement = $('#imageDiv');
  $myElement.addClass('testStylingClass');
}


var resetCSS = function resetCSS() {
   var myElement = document.getElementById('imageDiv');
  myElement.style.cssText = 'border-left: 0px; border-right: 0px; border-top: 0px; border-bottom:0px; padding: 5px;background-color:transparent;';
  imageDiv.classList.remove('testStylingClass');
}


var compareStyleFastAndSlow =  function compareStyleFastAndSlow() {
  var a = [addingCSSSlow,addingCSSFast,addCssJquery,addCssClass];
  compareFunctions(a,resetCSS);
  resetCSS();
}


