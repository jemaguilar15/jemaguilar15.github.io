
// @TODO 
// |-------------------
// | Animating header nav menu
// |-------------------
// const burgerMenu = document.getElementsByClassName("hb-menu");
$(window).on('beforeunload', function() {
    //   $('body').hide();
      $(window).scrollTop(0);
});
const nav = document.getElementById("nav-menu");
const title = document.getElementById("john");
const burgerMenu = document.querySelectorAll(".bar-line");

function slideNav() {

        for (i = 0; i < burgerMenu.length; i++) {
            burgerMenu[i].classList.toggle("toggle-bgcolor");
        }

        title.classList.toggle("toggle-color");
        title.classList.toggle("title-border");

        if (nav.style.top !== "0px") {
        
            nav.style.top = "0";  
        } else {
            nav.style.top = "-300px"
        }

}

function reset() {
    document.getElementById("contact-form").reset();
    alert("Message sent!");
    // return false;
}


let prevScroll = window.pageYOffset;

let portfolioImgAsset = document.getElementById("image-asset");

$(document).ready(() => {
    $(document).scroll(() => {
        // console.log($(document).scrollTop());
        let currentScroll = window.pageYOffset;

        if ($(document).scrollTop() > 250) {
            // console.log("Hello World");
            if (prevScroll > currentScroll) {

                if (nav.style.top === "0px") {
                    for (i = 0; i < burgerMenu.length; i++) {
                        burgerMenu[i].classList.toggle("toggle-bgcolor");
                    }
                    title.classList.toggle("toggle-color");
                    title.classList.toggle("title-border");
                    nav.style.top ="-300px";
                }
                defaultScroll();
              } else {
                userScrolled();
              }
              prevScroll = currentScroll;
        }
    });
});

const navbar = document.getElementById("header");
function defaultScroll() {
    return $(".grid-header").slideDown("fast");
    // return navbar.style.visibility ="visible";
}

function userScrolled() {
    return $(".grid-header").slideUp("fast");
    // return navbar.style.visibility ="hidden";
}


