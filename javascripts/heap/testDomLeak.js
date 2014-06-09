var introduceDOMLeak = function introduceDOMLeak() {
	start();
}

var start = function start()
{
  var p = document.getElementById("testDiv");
  detached = document.createElement("div");
  p.appendChild(detached);
  p.removeChild(detached);
  fill();
}

var fill = function fill()
{
  for (var i = 0; i < 25; ++i) {
    var div = document.createElement('div');
    div.data = new Array(10000);
    for (var j = 0, l = div.data.length; j < l; ++j)
      div.data[j] = j.toString();
    detached.appendChild(div);
  }
}