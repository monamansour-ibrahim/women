$(document).ready(function(){
   $(".slick-slider").slick({
        autoplay:true, 
         autoplaySpeed: 5000, 
        slidesToShow:4,
        slidesToScroll:2,
       nextArrow:'<i class ="fa fa-chevron-right slick-next"></i>',
         prevArrow:'<i class ="fa fa-chevron-left slick-prev"></i>',
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
   });
     $(window).scroll(function(){
        var scrollToTop=$(".scroll-to-top");
        if($(window).scrollTop()>=1000){
            scrollToTop.fadeIn(400);
            
        } else{
             scrollToTop.fadeOut(400);
        }
    });
    $(".scroll-to-top").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },1000)
    });  
     $(".navbar .navbar-nav .nav-item a").on("click",function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$("#"+$(this).data("scroll")).offset().top
        },1000);
    });
    $(".navbar .navbar-nav .nav-item a").on("click",function(){
        $(".navbar .navbar-nav .nav-item").removeClass("active");
        $(this).addClass("active");
    });
   });
    
   