const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        $(".nav").style.top = "0";
        $(".nav").style.opacity = "1";
    } else {
        $(".nav").style.top = "-80px";
        $(".nav").style.opacity = "0";
    }
}


// var feel = $$('.host-feel');

// for(var i = 0; i< feel.length; i++) {
//         feel[i].classList.remove('active');
//         feel[i+1].classList.add('active');
// }    
