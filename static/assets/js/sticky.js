window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var gatel = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= gatel) {
    navbar.classList.add("gatel")
  } else {
    navbar.classList.remove("gatel");
  }
}
