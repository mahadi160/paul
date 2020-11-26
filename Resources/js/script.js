//mixitUp

var mixer = mixitup('.grid-latest-container');

// scrollify 

$(function() {
    $.scrollify({
        section : ".scrollify",
        setHeights: false,
        updateHash: false,
    });
});

//HAMBURGER MENU 

function openMenu() {
    document.getElementById('navbar').style.height = "100%";
}

function closeMenu() {
    document.getElementById('navbar').style.height = "0%";
}

// Smooth scroll
$(function(){
   $('.menu-items a, .scrol-bown a').on('click',function(){
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000); 
       
       return false;
   }); 
});