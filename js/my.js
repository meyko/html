$(function() {
//прячем и показывам описание тура 
$( ".effect" ).hide();
setTimeout(ShowGallery,200);



 //показать - спрятать кнопку наверх
 $(window).scroll( function(){
  if (window.pageYOffset >100){
    $(".up-btn").show();
  }
  else {
   $(".up-btn").hide();
 }
});

//плавный скролл при клике по ссылке
$('a[href^="#"]').click(function(){
  var el = $(this).attr('href');
  $('body').animate({
    scrollTop: $(el).offset().top}, 1500);
  return false;
});

//перезапускаем галлерею при изменении экрана
$(window).resize(function(){
  SlideHotel(".gallery-item",".js-l-h",".js-r-h");
  SlideHotel(".gallery-item-town",".js-l-t",".js-r-t");
});


//подчеркивание в меню при наведении и выборе
$(".navbar-default").hover(
  function(){
    $(".navbar-default li").hover(
      function(){
        $(".navbar-default li").removeClass("active");
        $(this).addClass("active");
      });
  },
  function (){

   setTimeout(restoreClass,600);

   function restoreClass(){      

     $(".navbar-default li").removeClass("active");
     $(".navbar-default li").first().addClass("active");
   }

 }

 );

//для галлереи - кол-во картинок на странице и инициализация впервый раз.
var numSlides;
numSlides=(document.body.clientWidth>=975)?3:0;
SlideHotel(".gallery-item",".js-l-h",".js-r-h");
SlideHotel(".gallery-item-town",".js-l-t",".js-r-t");


//обработчики на клик по картинке галлерей

$(".gallery-item, .gallery-item-town").click(function(e){
  $("#"+$(this).parent().parent().data("img")).attr('src',$(e.target).attr("src")).css("opacity",0.3);
  $("#"+$(this).parent().parent().data("img")).animate({opacity:1});
})

//просмотр и пауза видео по клику на нему
$("video").click(function(){
  if (this.paused)
    this.play(); 
  else 
    this.pause();
})



function SlideHotel(item,ctrleft,ctrRight){
  var count=0;
  numSlides=(document.body.clientWidth>=975)?3:0;
  slideGallery(item);
  $(ctrleft).click(leftSlide);
  $(ctrRight).click(rightSlide);




//передистывание галлереи
function slideGallery(item,left=0){
$(item).each(function (index, element){

    if (index>(numSlides+count)||index<count){
       if (numSlides==3){
      if ($(element).css('display')=='block'){
        if (left){
         $(element).animate({"width":"0%"});
         $(element).hide();
       }
       else {


        $(element).animate({"width":"0%"});
        $(element).hide(500)
        
      }
    }
  }
  else{
    $(element).hide();
  }
  }
  else
{
    if ($(element).css('display')!='block'){
    if (numSlides==3){
      if (left){
    
      $(element).show();
          
       $(element).animate({"width":"25%"});
   
    }
    else {
      $(element).show().delay(500);
          
       $(element).animate({"width":"25%"});
     }
   }
     else{ 
      $(element).show();
      $(element).animate({"width":"100%"});

    }
  }
}


});

}


function leftSlide(){
  if (count>0){
    --count;
    slideGallery(item,1);
  }
}


function rightSlide(){
  if (count<($(item).length-numSlides-1)){
    ++count;
    slideGallery(item); 
  }
}
  //при инициализации галлереи установка большой кратинки
  $("#"+$(item).parent().parent().data("img")).attr('src',$(item+" img:not(:hidden)").first().attr("src"));

}


function ShowGallery(){
 $( ".effect" ).show("clip",1500 );
}


});