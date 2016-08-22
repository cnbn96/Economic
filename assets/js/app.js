$(function(){
  $('.crsl-items').carousel({
    visible: 4,
    itemMinWidth: 250,
    itemEqualHeight: 400,
    itemMargin: 9,
  });
  
  $("a[href=#zzz]").on('click', function(e) {
    e.preventDefault();
  });
});