$(".cart__one").mouseenter(function(){
  if ($(this).parent('a').children('a.background-image').length) {
      $(this).parent('a').children('a.background-image').show();
  } else {
      var image_name=$(this).url('cart__two');
      var imageTag='<a class="art__two">'+'<a url="'+image_name+''+'</a>';
      $(this).parent('a').append(imageTag);
  }
});

$(".cart__two").mouseleave(function(){
  $(this).parent('a').children('a.art__two').hide();
});
