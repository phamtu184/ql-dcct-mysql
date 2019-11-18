$('#sectionChooser').change(function(){
  var myID = $(this).val();
  $('.panel').each(function(){
      myID === $(this).attr('id') ? $(this).show() : $(this).hide();
  });
});