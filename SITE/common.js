$(document).ready(function() {
    $('.img-p').delay(2500).animate({left:'-=85'},600);
    $('.img-p').removeClass('anime', 2300);
    $('.primary').delay(3300).animate({opacity:1},1000);

    var WinWidth = $(window).width(); 

    // if (width <= 767  ){
    //     $('.main-wrap').delay(9300).css("margin-top", "10vh")
    // }
    // else {
    // //do something else
    // }
    
    $('.primary > li').click(function(){
        $('.primary li').removeClass('current');
        $('.submens > ul > a > li').removeClass('current');
        $(this).addClass('current');
          if ( WinWidth <= 767) {
            $('.primary').parent().css({ 
                display: 'none'
              });
        } else{
            $('.primary').parent().css({ 
                 display: 'inline-block'
              });
        }; //makes main manu disappear only on phones
 
            });
    
    $('.submens > ul > a > li').click(function(){
        $('.submens > ul > a > li').removeClass('current');
        $(this).addClass('current');
    });
    
    $('.backTrigger').click(function(){
        $('.backward').animate({
             opacity: 1,
             top: "+=90"
  }, 1000); 
        $('.menu, .submens, .logo').animate({
        	    left: '-=1200px'
        }, 500);
    });


    $('.main > li').click(function(){
        $(".animated-wrap").first().addClass('active'); // gives active class to first div
            $('.active div').first().switchClass( 'col-md-offset-4' , 'col-md-offset-0', 1000, "easeInOutQuad"); //deletes offset
            $('.active div').first().switchClass( 'col-sm-offset-4' , 'col-sm-offset-0', 1000, "easeInOutQuad");

   
            
        /* below is switch that throws a needed submenu*/
        /* depentds on which item we pressed in main*/
        switch(true) { 
                        
            case ($(this).is('.ministry')):
                $('.submens').removeClass('activesub');
                $('.submen1').addClass('activesub');
                break;
                        
            case ($(this).is('.beliefs')):
                $('.submens').removeClass('activesub');
               $('.submen2').addClass('activesub');
                break;
                        
            case ($(this).is('.events')):
                $('.submens').removeClass('activesub');
                $('.submen3').addClass('activesub');
                break;
                
            case ($(this).is('.about')):
                $('.submens').removeClass('activesub');
                $('.submen4').addClass('activesub');
                break;
                
            case ($(this).is('.contact')):
                $('.submens').removeClass('activesub');
                $('.submen5').addClass('activesub');
                break;
                                    
            }
             
             $('.submens').hide();
             $(".activesub").delay(1000).show('slide', { direction: 'right'}, 1000); // animation of submenu appear
    });
    
   /* $('.img-r').click(function() {
           $('.submens').hide();  
           $('.activesub').hide();
           $('.active div').first().switchClass('col-md-offset-0', 'col-md-offset-4', 1000, "easeInOutQuad");
           $('.active div').first().switchClass('col-sm-offset-0', 'col-sm-offset-4', 1000, "easeInOutQuad");
        $('.active div').first().switchClass( 'col-xs-offset-0' , 'col-xs-offset-2', 1000, "easeInOutQuad");
           $(".animated-wrap").first().removeClass('active');
           $('.primary li').removeClass('current');
    });*/
var backW = function() {
     $('.submens').hide();  
           $('.activesub').hide();
           $('.active div').first().switchClass('col-md-offset-0', 'col-md-offset-4', 1000, "easeInOutQuad");
           $('.active div').first().switchClass('col-sm-offset-0', 'col-sm-offset-4', 1000, "easeInOutQuad");
       // $('.active div').first().switchClass( 'col-xs-offset-0' , 'col-xs-offset-1', 1000, "easeInOutQuad");
        //$('.primary').parent().switchClass( 'hidden-xs' , 'col-xs-3', 1000, "easeInOutQuad"); //Feb
        //$('.primary').parent().switchClass('hidden-sm', 'col-sm-2',  1000, "easeInOutQuad"); //Feb  
        $('.primary').parent().css('display', 'inline-block'); //Feb
           $(".animated-wrap").first().removeClass('active');
           $('.primary li').removeClass('current');
           $('.backward').animate({
             opacity: 1,
             top: "-=90"
  }, 1000);

        $('.menu, .submens, .logo').animate({
        	    left: '+=1200px'
        }, 500);
};


$('.img-r').click(backW);
$('.backward').click(backW);
    
});



/* Keep in mind, that only animations of main and sub menu are made by JS. Content animation is powered by CSS3 */












































