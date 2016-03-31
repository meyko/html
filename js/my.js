$(function() {
 var showForm = 0; // флаг  - не показывлась доп форма
 var GalleryData = {} //объект с текстами - можно хранить на сервере, но пока так
 GalleryData.shipGallery = {
    src : ["images/hotel/1.jpg","images/hotel/2.jpg","images/hotel/7.jpg","images/hotel/8.jpg","images/hotel/9.jpg","images/hotel/6.jpg"],
    txt : ['Наш роскошный подводный корабль состоит из двух основных палуб. Верхняя, с рестораном, СПА-салоном, вертолетной площадкой и открытым бассейном, расположится над поверхностью моря, а нижняя — на 30-метровой глубине под водой.',
    'В субмарине имеется 220 элитных номеров, выполненных в виде воздушных пузырей из оргстекла.Эта композиция даст возможность постояльцам гостиницы наслаждаться красами океанского рифа, наслаждаться свежестью в жаркий день.'
    ,'Номерной фонд насчитывает 61 номер, включая 15 номеров «люкс», 29 номеров «полулюкс», 17 номеров «стандарт». Оборудован специальный номер для людей с ограниченными физическими возможностями. Вме номера с видами на океан',
    'Во время кругостветного тура, субмарина будет всплывать на поверхность возле городов. На ее наземной части предусмотрено несколько торгово-развлекательных заведений и мест для деловых переговоров. В нижних ярусах, кроме самого отеля, имеется еще и парковка, помещения для персонала и склады.',
    'Верхняя секция более крупная, в жаркие дни субмарина будет находится над поверхностью воды на уровне около 10 метров, чтобы отдыхающие смогли насладиться рестораном, смотровыми площадками, а также открытыми бассейнами прямо посреди океана',
    'Чтобы гости имели возможность следить за интересной подводной жизнью морских жителей, в гостинице учтено специальное освещение и специальная система, позволяющая осматривать тайну подводного мира в свете из любой точки корабля',
    ],
    header:['Открытая SPA зона','Панорамные номера','Отель 5 звезд','Прогулки по берегу','Бассейн в океане','Путешествие в свете']
  };
  GalleryData.servicesGallery = {
    src : ["images/town/1.jpg","images/town/2.jpg","images/town/3.jpg","images/town/4.jpg","images/town/5.jpg","images/town/6.jpg","images/town/7.jpg","images/town/8.jpg","images/town/9.jpg","images/town/10.jpg",],
    txt : [' В нашу экскурсионную программу входит дайвинг к статуе Иисуса Христа, находящейся на дне моря, в бухте Сан-Фруттуозо. Статуя высотой около 2,5 метров находится на 17-метровой глубине',
    'Таинственный древний город на дне озера Цяньдаоху. Во время подводной экскурсии планируется поднятие наверх - к озеру тысячи островов (Цяньдаоху, кит. 千島湖) — известному своей кристально чистотой, расположенному в китайской провинции Чжэцзян',
    'Около 50-ти лет назад древний город в Китае, казалось, бесследно исчез. Шичен, расположенный в провинции Чжэцзян, был затоплен, когда долину, на которой он находился, превратили в искусственное озеро.Для создания озера была построена дамба, и по мере того, как поднимался уровень воды, город оказался на дне этого озера',
    'Японская компания Shimizu построила за $26 млрд современную «Атлантиду». Мы обязательно остановимся возле подводного города будущего',
    'Древний Гераклион был скрыт с поверхности земли землетрясением на несколько тысячелетий. Его открытие удивило ученых. И хотя Гераклион не Атлантида (легенда об Атлантиде гораздо старше), их истории очень похожи. Потерянный город был обнаружен под водой спустя 1200 лет',
    'Японская компания Shimizu построила за $26 млрд современную «Атлантиду». Мы обязательно остановимся возле подводного города будущего',
    'В начале 1977 года эхолоты рыболовецкого судна зарегистрировали на дне океана, несколько в стороне от Бермудских островов, неровность, напоминающую пирамиду. Это послужило поводом для американца Чарльза Берлица организовать специальную экспедицию. Эта экспедиция обнаружила на глубине 400 метров пирамиду. Вы увидите ее своими глазами',
    'Кубинский подво́дный город — комплекс находящихся ныне под водой сооружений, расположенных на шельфе самой западной части острова Куба. Территория относится к провинции Пинар-дель-Рио, расположенной на полуострове Гванаакабибес',
    'Дайвинг – это активный отдых и познавательный спорт, путешествия и стиль жизни. Для безопасного наслаждения подводным миром нужно учиться. Мы будем учиться, в самом волнующем месте, у обломков самолета времен второй мировой',
    'Тот, кто только начинает заниматься дайвингом, открывает для себя ощущение свободы, безмятежности и получает массу удовольствий и новых впечатлений знакомое только дайверам. Наши инструктора найдут время для каждого. Все услуги  - бесплатно!'],
    header:['Вы увидите Иисуса',' Древний город Шичен','озеро Цяньдаоху','Новая Атлантида в Японии','Древний Египет в океане','Новая Атлантида в Японии','Подводные пирамиды в Бермудском треугольнике', 'Кубинские воды','Самолет Второй Мировой','Давинг с инструктором']
  };

  var current; //позиц.экрана
  var CurBg = {}; //позиция бекграунда по дефолту
  CurBg.curbgForm = minbgForm = 20;
  CurBg.curbgTown = minbgTown = 0;

  //подгружаю кратинки заранее для галлереи
  preCacheImg(GalleryData.servicesGallery.src);
  preCacheImg(GalleryData.shipGallery.src);

  //прячу и показывам описание тура 
  $( ".effect" ).hide();
  setTimeout(ShowGallery,200);

  //Вся (кроме первого лого) анимация при прокрутке
  $(window).scroll( function(){
    //показать - спрятать кнопку наверх
    if (window.pageYOffset >100){
      $(".up-btn").show();
    }
    else {
     $(".up-btn").hide();
   }
   scrollLogo();

   if (!current) current =  $(window).scrollTop();
   var scrolled = $(window).scrollTop();
   var delta = scrolled - current;
   current=$(window).scrollTop();
   
    //параллакс двух фонов
    parlaxBackrnd('#js-paralax-form',"curbgForm",minbgForm);
    parlaxBackrnd('.town-logo',"curbgTown",minbgTown);

    //затемнение высветление блоков
    var visible = inWindow("#js-paralax-form, .hotel, #js-responses, .town, .town-logo");
    $(visible.true).each(
      function(index, element){
        if ($(element).css('opacity')==0.5)
          $(element).stop().animate({opacity:1},1000);
      });
    $(visible.false).each(
      function(index, element){
        $(element).stop().animate({opacity:0.5},500);
      });

    //дополнительная форма появление
    if(inWindow(".footer").true.length!=0&&(showForm==0)){
      showForm=1;
      setTimeout(function(){
        showAdv();
      },10000);
    }

    //выезжание первой формы
    var formShow = inWindow(".booking-form:not(.temp-form)");
    if ((formShow.true.length!=0)&&($(".booking-form:not(.temp-form)").css('left')=='-2000px')){
      $(".booking-form:not(.temp-form)").animate({left:"0px"},2000,"easeOutBounce",
        function(){
          for(var i=0;i<3;i++)
            $(".booking-form:not(.temp-form) .btn").effect('highlight',{color:'#003059'});
        });
    }
    else if( $(".booking-form:not(.temp-form)").css('left')=='0px'&&formShow.false.length!=0){
      $(".booking-form:not(.temp-form)").css({left:"-2000px"});
    }

    function parlaxBackrnd(selector,curbg,minbg){
      if (inWindow(selector).true.length!=0){

        if (delta>0)
          CurBg[curbg]+=0.5;
        else {
          CurBg[curbg]-=0.5;
        }
        if (CurBg[curbg]<0)  
          CurBg[curbg]+=0.5;
        else if (curbg>100)
          CurBg[curbg]-=0.5;

        $(selector).css({'background-position':'0% '+CurBg[curbg]+'%'});
      }
      else if (delta>0){
        CurBg[curbg]=minbg;
        $(selector).css({'background-position':'0% '+CurBg[curbg]+'%'});
      }
      else {
        CurBg[curbg]=40;
        $('selector').css({'background-position':'0% '+CurBg[curbg]+'%'});
      }
    }
  });

  //обработчик на форму на странице
  $(".booking-form .btn").on('click', sendForm);
  //обработчик на динамические созд. форму на странице
  $('#js-modal-img').on('click','.booking-form .btn',sendForm);

  //плавный скролл при клике по ссылке
  $('a[href^="#"]').click( function(){ 
    var scroll_el = $(this).attr('href'); 
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
    }
    return false;
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

  // вывод текстов-описаний при смене слайда
  $(window).bind('textChng', function(e,item,src) {
    var currentImage=$('#'+$(item).parent().parent().data("img"));
    var currentData = $(item).parent().parent().data("sourse");
    var index = $.inArray(src,$(GalleryData[currentData].src));
    var header = GalleryData[currentData].header[index];
    var text = GalleryData[currentData].txt[index];
    currentImage.parent().parent().children('.big-pic-discr').children('.head').text(header);
    currentImage.parent().parent().children('.big-pic-discr').children('.decription').text(text);
  });


  //просмотр и пауза видео по клику на нему для всех кроме файерфокса -  в нем и так работает
  var user = navigator.userAgent;
  if (user.indexOf('Firefox')==-1){
    $("video").click(function(){
      if (this.paused)
        this.play(); 
      else 
        this.pause();
    })
  }

  //ГАЛЛЕРЕЯ отслеживание изменение размера экрана, пререиниц. галерей, листание.
  var currentWidth;
  $(window).on("resize",function(){
    var newWidth=(document.body.clientWidth>=975)?3:0;
    
    //действия только при изменении вида на md и обратно
    if (currentWidth!= newWidth){
      currentWidth=newWidth;
      //убираю все обработчики, так как они перенастраиваются с опред. параметрами под разрешение
      $(".big-picture").off();
      $(".gallery-item, .gallery-item-town").off();
      $(".gallery-item img, .gallery-item-town img").off();
      //иниц. галлерей
      SlideHotel(".gallery-item",".js-l-h",".js-r-h",currentWidth,GalleryData.shipGallery);
      SlideHotel(".gallery-item-town",".js-l-t",".js-r-t",currentWidth,GalleryData.servicesGallery);

      if (currentWidth===0){
        //модальное - окно - картинка - вешаю обработчик на сам слайд галлереи в моб. версии,
        showBigPic(".gallery-item img, .gallery-item-town img"); 
      }
      else {
          //обработчики на клик по картинке из галлереи
          $(".gallery-item, .gallery-item-town").on('click',
            function(e){
               var src = $(e.target).attr("src");
               var currentImage =  $("#"+$(this).parent().parent().data("img"));
               //событие чтобы сменить описание
               $(window).trigger('textChng',[$(this),src]);
               //смена большого изображенея
               currentImage.attr('src',src).css("opacity",0.3);
               currentImage.animate({opacity:1});  
               countPaddings();
             });

        //модальное - окно - картинка, вешаю обработчик на превью - если не мобильная версия
        showBigPic(".big-picture");
      }
    }
      //при изменении р-ра экрана пересчет отступов всегда
      countPaddings();
  });

  //чтобы проининц галлереи при первой загрузке страницы
  $(window).resize(); 

  //скрытие модального окна
  $("#js-overlay").click(function(e){
    if (e.target==e.currentTarget){
      if ( $("#js-overlay").css('display')=='block' ){

        if($(".temp-form").length!=0) 
          $(".temp-form").remove();

          $('#js-modal-img').animate({opacity: 0.8, top: '0%'}, 200, function(){
          $('#js-modal-img').hide();
          $("#js-overlay").fadeOut(500);
        })
      }
    }
  });


  //инициализ галлереи с параматерами через замыкание
  function SlideHotel(item,ctrleft,ctrRight,numSlides,gallery){
    var animated=0;
    var count=0;
    $(ctrleft).off();
    $(ctrRight).off();
    $(ctrleft).click(leftSlide);
    $(ctrRight).click(rightSlide);
    slideGallery(item,0,count);

    //перемотка слайдов
    function slideGallery(item,left,count){

      var currentSlides=[];

      for(el in gallery.src){
        if (el<=(numSlides+count)&&el>=count){
          currentSlides.push(gallery.src[el]);
        }
      }

      $(item).each(function(index,element){
        if (index>numSlides){
          $(element).hide();
        }
        else $(element).show();
      });

      if(numSlides>0){
        //для большого экрана
        $(item).css({opacity:0}); 
        $(item).each(function(index,element){
          $(element).children().children().attr('src',currentSlides[index]);
        });

        if (left){
          var elem = ':first';
          var offset = '-25%';
        }
        else{
          var elem = ':last';
          var offset = '+25%';
        }
        animated=1;
        $(item+elem).hide().delay(500);
        $(item).not(elem).animate({"left":offset},-4)
        $(item).not(elem).animate({opacity:1},-4)
        $(item).not(elem).animate({"left":"0"},500)
        $(item+elem).show();
        $(item+elem).animate({opacity:1},0,function(){animated = 0});
      }
      //для мобильных
      else{
        animated=1;
        $(item).first().css({opacity:0});
        $(item).first().children().children().attr('src',currentSlides[0]);
        $(item).first().animate({opacity:1},500,function(){animated = 0});
        //событие для добавления текста о картинке при листании
        var src = currentSlides[0];
        $(window).trigger('textChng',[item,src]);
      }
    }

    function leftSlide(){
      //animared - избегаю повторных нажатий, пока анимация идет
      if (!animated){
        if (count>0){
          --count;
          slideGallery(item,1,count);
        }
      }
      else{
        setTimeout(leftSlide,500);
      }
    }


    function rightSlide(){
      if (count<(gallery.src.length-numSlides-1)){
        if (!animated){
          ++count;
          slideGallery(item,0,count); 
        }
        else{
          setTimeout(rightSlide,300);
        }
      }
    }
    
   
    $("#"+$(item).parent().parent().data("img")).attr('src',$(item+" img:not(:hidden)").first().attr("src"));
  }

/*****all functions****************************************************/
  //мод окно показ дополнительной формы
  function showAdv(){
   $('#js-modal-img img').hide();
   $("#js-overlay").fadeIn('500',
    function(){
      //только после потемнения экрана запуск
      var newform = $(".booking-form").clone();
      newform.addClass("temp-form");
      newform.css({"background":"white","left":"0px"});
      $('#js-modal-img').append(newform);
      $('.temp-form .btn').css('background',"#90c9ee");
      var top = ($(window).height()- $('#js-modal-img').height())/2;
      $('#js-modal-img').show().animate({opacity: 1, top: top+'px'}, 200);
    });
  }

  //модальное окно просмотр большой картинки
  function showBigPic(selector){
    $(selector).click(function(e){
      var src = $(this).attr('src');
      $("#js-overlay").fadeIn('500',function(){
        //только после потемнения экрана запуск
        $('#js-modal-img img').attr('src',src);
        $('#js-modal-img img').show();
        var top = ($(window).height()- $('#js-modal-img').height())/2;
        $('#js-modal-img').show().animate({opacity: 1, top: top+'px'}, 200);
      });

    });
  }

  //выезжание плитки в начале
  function ShowGallery(){
   $( ".effect" ).show("clip",1500 );
  }

  // видимость элемента разметки на странице
  function inWindow(selector){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var currentEls = $(selector);

    var result = {};
    result.true = [];
    result.false = [];
    
    currentEls.each(function(){
      var el = $(this);
      var offset = el.offset();
      if( (scrollTop <= offset.top&&offset.top<=(scrollTop + windowHeight) )||
        ( (el.height() + offset.top) < (scrollTop + windowHeight)&&(el.height() + offset.top)>scrollTop)||
        ( offset.top<scrollTop&&((scrollTop + windowHeight)<(el.height() + offset.top)) ) )
        result.true.push(this);
      else 
        result.false.push(this);
    });
    return result;
  }

  //уезжание лого на входе
  function scrollLogo(){
    var scrolled = $(window).scrollTop();
    $('#js-parallax').css({'top':(0-(scrolled*.25))+'px'});
  }

  //подсчет отступов для выранивания картинки возле текста
  function countPaddings(){
   $(".big-pic-discr").each(
    function(index,element){
      decrHeight=$(element).height();
      bigPicHeight=$(element).parent().children().children(".big-picture").height();
      if(bigPicHeight==0){
        setTimeout (countPaddings,500);
        return;
      }
      if((decrHeight- bigPicHeight)>0)
        $(element).parent().children().children(".big-picture").css('padding-top',(decrHeight- bigPicHeight)/2+"px");
      else
        $(element).parent().children().children(".big-picture").css('padding-top',"20px");
    });
 }

//отправка данных на сервер и отображение ответа
function sendForm(){
  var inputs = $(this).parents(".booking-form").find('input');
  if ($(this).parents(".booking-form").find('input:invalid').length==0 ){
    //подготовка элмента разметки для ответа
    var div = $("<div></div>");
    div.addClass('answer');
    div.width($(this).parents(".booking-form").outerWidth());
    div.height($(this).parents(".booking-form").outerHeight());
    var paddings = div.height()/2;
    div.css({background:'#0B68A1','position':'absolute','top':0,'border':'2px solid white','padding-top':paddings,'color':'white','fomt-size':'16px','text-align':'center'});
    //запрос
    params=$(this).parents(".booking-form").serialize();
    $.ajax({
      type:'POST',
      url:"form.php",
      dataType:'json',
      data:params,
      success:function(data){
       if (data.result){
        div.text('Данные успешно отправлены');
      }
      else {
       div.text('Возникла ошибка, попробуйте еще раз');
     }
   }
   })
  //отображение ответа
   $(this).parents(".booking-form").parent().append(div);
   $('.answer').hide();
   $('.answer').css({'display':'block'});
   setTimeout(function(){
      $('.answer').css({'display':'none'},0);
      $('.answer').remove();
    },1000)

   return false;
  }
}

  function preCacheImg(src){
    $.each(src, function(){
      var img = new Image();
      img.src = this;
    });
  }

});


