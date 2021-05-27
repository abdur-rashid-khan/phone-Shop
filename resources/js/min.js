$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            margin:20,
            items:3,
            loop:true,
            autoplayHoverPause:true,
            autoplay:true,
            autoplayTimeout:3000,
            responseresponsiveRefreshRate:true,
            responsive:{
                0:{
                    items:2,
                },
                575.98:{
                    items:2,
                },
                767.98:{
                    items:2,
                },
                991.98:{
                    items:3,
                },
                1199.98:{
                    items:4,
                },
                1919.98:{
                    items:5,
                }
    
            }
        });
        $(".js--services-section").waypoint(function(e){"down"==e?$("nav").addClass("sticky"):$("nav").removeClass("sticky")
        });
        mixitup(".container")
        
})



// aos
AOS.init({
    delay: 300,
     duration: 800,
 });



function openManu(){document.getElementById("myNav").style.width="100%";}
function closeManu(){document.getElementById("myNav").style.width="0%"} 
function closePopup(){document.getElementById('popup').style.display="none"} 