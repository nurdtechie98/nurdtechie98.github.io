$(document).ready(function() {
    $(".infinity").scroll(function(){
        console.log("scrolling");
    });
  });
var scroll_pos_test = 2000;
var y_scroll_threshold=1000;
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset; 
    var navbar = document.getElementById("navbar");
    var mul=1
    var shape = document.getElementById("shapes");    
    if(y_scroll_pos > scroll_pos_test){
        document.body.innerHTML +='<div class="container content even"><h1>Chirag Shetty<h1><h3>&lt;nurdtechie98&gt;</h3></div><div class="container content odd"><h1>student developer procrastinator<h1></div><div class="container content even"><h1>I build things<h1><a href="">github</a></div><div class="container content odd"><h1>I solve problems<h1><a href="">codechef</a><a href="">codeforce</a><a href="">hackerrank</a></div><div class="container content even"><h1>mail me at <a href="mailto:chiragshetty98@gmail.com">chiragshetty98@gmail.com</a><h1></div><div class="container content odd"><h1>connect with me in <a href="">linkedin</a><h1></div><div class="container content even"><h1>Become friends with me on <a href="">facebook</a><h1></div><div class="container content odd"><h1>follow me on <a href="">twitter</a><h1></div>';
        scroll_pos_test+=2000;
    }
    if(y_scroll_pos>250)
    {
        navbar.style.opacity="1";
    }
    if(y_scroll_pos<250)
    {
        //console.log(y_scroll_pos/250);
        navbar.style.opacity=y_scroll_pos/150;
    }
});