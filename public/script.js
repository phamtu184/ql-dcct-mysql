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

$('#sectionChooser').change(function(){
  var myID = $(this).val();
  $('.panel').each(function(){
      myID === $(this).attr('id') ? $(this).show() : $(this).hide();
  });
});
  
