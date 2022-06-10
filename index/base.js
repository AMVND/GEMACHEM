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

