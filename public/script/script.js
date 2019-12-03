var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("two-navbar").style.top = "0";
  } else {
    document.getElementById("two-navbar").style.top = "-124px";
  }
  prevScrollpos = currentScrollPos;
}

new WOW().init();
