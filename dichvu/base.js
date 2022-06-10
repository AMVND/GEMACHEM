window.onscroll = function() {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("sticky-wrapper").style.padding = "0px 0";
  } else {
    document.getElementById("sticky-wrapper").style.padding = "0px 0";
  }
}

function myFunction() {
  var x = document.getElementById("body-wrapper");
  if (x.className === "body-wrapper") {
    x.className += " responsive";
  } else {
    x.className = "body-wrapper";
  }
}