
$("ul").on("click","li", function(){
  $(this).toggleClass("done");
});

$("ul").on("click","span", function(event){
  $(this).parent().fadeOut(600,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$('input[type="text"]').on("keypress",function(event){
  if(event.which === 13){
    var text = $(this).val();
    $(this).val("");
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");

  }
});

$('.fa-plus').click(function(){
  $('input[type="text"]').fadeToggle(400);
});
