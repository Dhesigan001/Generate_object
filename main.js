$(document).ready(function () {


    var leftVal = Math.floor(Math.random() * 95);
    var topVal = Math.floor(Math.random() * 95);

    $(".letter").css('left', leftVal.toString() + "%");
    $(".letter").css('top', topVal.toString() + '%');

    var score = 0;
    time = 10;

    var interval = setInterval(function(){
    time = time - 1;
    $(".time").html(time);
    $(".letter").click(function () { 
        var leftVal = Math.floor(Math.random() * 95);
        var topVal = Math.floor(Math.random() * 95);
        $(".letter").css('left', leftVal.toString() + "%");
        $(".letter").css('top', topVal.toString() + '%');
        score += 1;
        $("#score").html(score);
    });
    
    if (time == 0) {
        clearInterval(interval);
        $(".letter").hide();
    }
},1000);
    

});