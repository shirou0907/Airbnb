const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var dialog = $('.dialog');
var userbtn = $$('.header-info-user');

userbtn.forEach(function(e) {
    e.onclick = function() {
        if(userbtn) {
            dialog.style.display = 'block';
        }
    }
})



// Cuon chuot hien thanh navbar
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

// Chuyen tab 

var tabs = $$('.subnav-options-item');
var panes = $$('.nav-tab');
var line = $('.subnav-line');
var tabactive = $('.subnav-options-item.active');

line.style.left = tabactive.offsetLeft + 'px';
line.style.width = tabactive.offsetWidth + 'px';

tabs.forEach((tabs, index) => {
    const pane = panes[index]; 
    tabs.onclick = function() {
        $('.subnav-options-item.active').classList.remove('active');
        $('.nav-tab.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
        pane.classList.add('active');
    }
})


var gtabs = $$('.getaways-title');
var gpanes = $$('.getaways-content');
var gline = $('.getaways-line');
var gtabactive = $('.getaways-title.active');

gline.style.left = gtabactive.offsetLeft + 'px';
gline.style.width = gtabactive.offsetWidth + 'px';

gtabs.forEach((gtabs, index) => {
    const gpane = gpanes[index]; 
    gtabs.onclick = function() {
        $('.getaways-title.active').classList.remove('active');
        $('.getaways-content.active').classList.remove('active');
        gline.style.left = this.offsetLeft + 'px';
        gline.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
        gpane.classList.add('active');
    }
})

var userlogin = $('.user-login');
var modal = $('.modal');
userlogin.onclick = function() {
        modal.style.display = 'block';
        dialog.style.display = 'none';
}

window.onclick = function(e) { 
    if(e.target == modal) {
        modal.style.display = 'none'; 
    }
    if(e.target == dialog) {
        dialog.style.display = 'none';
    }
}

