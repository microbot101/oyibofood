// Add active class to the current button (highlight it)

var header = document.getElementById("main");
var btns = header.getElementsByClassName("auth");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activa");
  current[0].className = current[0].className.replace(" activa", "");
  this.className += " activa";
  });
}

var header = document.getElementById("ikw");
var btns = header.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("actives");
  current[0].className = current[0].className.replace(" actives", "");
  this.className += " actives";
  });
}

function menuFuction() {
  document.querySelector(".nav-items").style.display = "flex";
};

function closeMenuFuction() {
  document.querySelector(".nav-items").style.display = "none";
};


function sign_up() {
  document.querySelector(".form2").style.display = "block";
  document.querySelector(".form1").style.display = "none";
};
function login() {
  document.querySelector(".form1").style.display = "block";
  document.querySelector(".form2").style.display = "none";
};
