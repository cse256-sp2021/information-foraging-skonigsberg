export function setupSticky(){
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("main-menu-container");

// Get the offset position of the navbar
var sticky = header.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  var x = document.getElementById("mturk-top-banner-drop-down-content");
  if (window.getComputedStyle(x).display === "none") {
  header.classList.add("sticky2");
} else{
  header.classList.remove("sticky2");
}

if (window.pageYOffset > sticky)  {
  header.classList.add("sticky");
} else{
  header.classList.remove("sticky");
}
}
}
