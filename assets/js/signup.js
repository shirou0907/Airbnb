const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var btn = $('.continue');
var cop = $('.complete');
var sign1 = $('.sign-in__form-1');
var sign2 = $('.sign-in__form-2');

btn.onclick = function() {
    sign1.style.display = 'none';
    btn.style.display = 'none';
    sign2.style.display = 'block';
    cop.style.display = 'block';
    $('.has-acount').remove();
    $('.overlay-content.o-1').style.display = 'none';
    $('.overlay-content.o-2').style.display = 'block';

}