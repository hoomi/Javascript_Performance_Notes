var addCssIndividually = function addCssIndividually() {
	$('.game').css('background','black');
	$('.game p').css('background','blue');
	$('.game p').css('color','white');
	$('.game again').css('width','300px');
	$('.game again').css('height','400px');
};

var addCssAsAClass = function addCssAsAClass() {
	$('.game').addClass('changedStyle');
};

var resetjQueryCSS = function resetjQueryCSS() {
	$('.game').css('background','white');
	$('.game p').css('background','white');
	$('.game p').css('color','black');
	$('.game again').css('width','100px');
	$('.game again').css('height','100px');
	$('.game').removeClass('changedStyle');
};


var compareJqueryStyle =  function compareJqueryStyle() {
  var a = [addCssIndividually,addCssAsAClass];
  compareFunctions(a,resetjQueryCSS);
  resetjQueryCSS();
}