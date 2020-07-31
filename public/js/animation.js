$(".hb-menu").click(function(){
    $(".nav-menu").slideToggle(300);
    setTimeout(() => {
        $(".bar-line").toggleClass("toggle-bgcolor");
        $(".title").toggleClass("toggle-color").toggleClass("title-border");
    }, 100);   
});

// $(document).ready(() => {
//     $(document).scroll(() => {
//         if( $(document).scrollTop() === 0 || $(document).scrollTop() < 200) {
//             defaultScroll();
//         } else {
//             userScrolled();
//         }
//     });
// });

// function defaultScroll() {
//     return $(".grid-header").slideDown("slow");
// }

// function userScrolled() {
//     return $(".grid-header").slideUp("slow");
// }


