//Overlapping tab
function changeTap(elem) {
  var a = document.getElementsByTagName('li');
  for (i = 0; i < a.length; i++) {
    a[i].classList.remove('active');
  }
  elem.classList.add('active');
}
//load main page
function load() {
  document.getElementById("bookBoat").innerHTML = ' ';
  document.getElementById("coolProject").innerHTML = ' ';
  document.getElementById("playGame").innerHTML = ' ';
}
//load project page
function loadProject() {
  document.getElementById("bookBoat").innerHTML = ' ';
  document.getElementById("playGame").innerHTML = ' ';
  document.getElementById("coolProject").innerHTML = '<object type="text/html" data="./src/coolproject.html" width="100%" height="100%"></object>';
}
//load game page
function loadGame() {
  document.getElementById("bookBoat").innerHTML = ' ';
  document.getElementById("coolProject").innerHTML = ' ';
  document.getElementById("playGame").innerHTML = '<object type="text/html" data="./src/CatchSeeds.html" width="100%" height="100%"></object>';
}
//load bookboat page
function loadBoat() {
  document.getElementById("coolProject").innerHTML = ' ';
  document.getElementById("playGame").innerHTML = ' ';
  document.getElementById("bookBoat").innerHTML = '<object type="text/html" data="./src/bookboat.html" width="100%" height="100%"></object>';
}
//Scrolling pic
window.onload = function(){
  var oDiv = document.getElementById('scroll');
  var oUl = oDiv.getElementsByTagName('ul')[0];
  var timer = null;
  var speed = -1;
  oUl.innerHTML += oUl.innerHTML;
  setTimeout(move,2000);

  function move(){
    timer = setInterval(function(){
      oUl.style.top = oUl.offsetTop + speed + 'px';
      if(oUl.offsetTop <= - oUl.offsetHeight / 2){
        oUl.style.top = '0';
      }else if(oUl.offsetTop >= 0){
        oUl.style.top = - oUl.offsetHeight / 2 + 'px';
      }
    },30);
  }
};
