document.addEventListener('DOMContentLoaded', bindTabs);

var intervalId = null;
function bindTabs(){
  var lastTab,
  tabs = document.querySelectorAll(".tabs li"),
  i;

  function selectTab(){
    activateTab(this);
    loadContent(this.attributes["data-load"].value);
  }

  function activateTab(tab){
    if (lastTab) {
      lastTab.classList.remove("active");
    }
    (lastTab = tab).classList.add("active");
  }

  [].forEach.call(tabs, function(el){
    el.addEventListener('click', selectTab, false);
  });
}


function loadContent(url){
  getContent(url).then(function(data){
    data = replaceAll("src=\"","src=\"https://developer.chrome.com/devtools/docs/demos/memory/",data);
    prepareContent(data);
    prepareGallery();
  })
}

var lastDiv;
function prepareContent(data){
  var content = document.getElementById("content"),
  div = document.createElement("div");
  div.innerHTML = data;
  if (lastDiv) {
    content.removeChild(lastDiv);
  }
  content.appendChild(div);
  lastDiv = div;
}

function prepareGallery(){
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null
  };
  var width = 426,
  forward = false,
  position = 0,
  elements = document.querySelectorAll(".gallery li"),
  bigArray = getLongArray(),
  number = elements.length;
  
  function checkDirection() {
    if (position === 0) {
      forward = true;
    } else if (position === (number  - 1)) {
      forward = false;
    }
  }

  function changeLeftProperty() {
    var value = (-1 * width * position) + "px";
    [].forEach.call(elements, function(el) {
      el.style.left = value;
    });
  }

  function advance(){
    position = position + (forward ? 1 : -1);
    console.log(bigArray.length);
  }

  function move(){
    checkDirection();
    advance();
    changeLeftProperty();
  }
  intervalId = setInterval(move, 2000);
}

function getContent(url){
  var callbacks = [],
  xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.onload = function(e){
    if (xhr.status == 200) {
      callbacks.forEach(function(cb){
        cb(xhr.response);
      })
    }
  };
  xhr.send();
  return {
    then: function(fn){
      callbacks.push(fn)
    }
  }
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function getLongArray() {
  var longArray = new Array(10000);
  for (var i = 0; i<10000; i++) {
    longArray[i]=document.createElement('img');
  }
  return longArray;
}