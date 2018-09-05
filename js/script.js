var counter1 = 1;
var counter2 = 1;
var change = true;
// $("body").css("overflow-y","hidden");
$("#btn-start").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    // $("body").css("overflow-y","visible");
    $('body,html').animate({scrollTop: top}, 1500);
});
var changeFunction = function () {
    counter2=counter1+1;
    if (change) {
        $('#home').css({
            background: 'url("img/' + counter2 + '.jpeg") no-repeat center center fixed',
            display: 'table',
            position: 'relative',
            backgroundSize: 'cover'
        });
    }
    if(!change){
        counter1++;
        if (counter1 >= 16) counter1 = 1;
        $('.top').css({
            background: 'url("img/'+counter1+'.jpeg") no-repeat center center fixed',
            display: 'table',
            position: 'relative',
            backgroundSize: 'cover',
            opacity:'1'
        });
    }
    change=!change;
};
$('#home').css({
    background: 'url("img/' + counter2 + '.jpeg") no-repeat center center fixed',display: 'table',
    position: 'relative',
    backgroundSize: 'cover'
});
changeFunction();
setInterval(changeFunction,7000);

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipinx",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 5000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});
$(document).ready(function(){
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
        if(!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 5000
            });
            show = false;
        }
    });
});



