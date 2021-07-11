$(".nav-link").hover(function(){
    $(this).css({color: "#ffcc25",transition:"all 1s"});
    }, function(){
        $(this).css({color: "white",transition:"all 1s"});
  });

$(".btn-icon").css({opacity:"0"})


var y=$(window).scrollTop();
if (y<100){
    $(".navbar").css({backgroundColor:"transparent",boxShadow:"none"})
    $(".nav-link").css({color:"#fff"})
  
}
var advisorOffset=$("#home").offset().top;
$(window).scroll(function(){
    var x=$(window).scrollTop();
    if(x>advisorOffset){
        $(".navbar").css({backgroundColor:"white",boxShadow:"0px 6px 9px 0px rgba(0,0,0,0.041)",transition:"all 1s"})
        $(".nav-link").css({color:"#7eb9a7",transition:"all 1s"})
        $(".btn-icon").css({opacity:"1",transition:"all 1s"})
        $(".nav-link").hover(function(){
            $(this).css({color: "#ffcc25",transition:"all 1s"});
            }, function(){
            $(this).css({color: "#7eb9a7",transition:"all 1s"});
          });
        
    }
    else{
        $(".navbar").css({backgroundColor:"transparent",boxShadow:"none",transition:"all 1s"})
        $(".nav-link").css({color:"#fff",transition:"all 1s"})
        $(".btn-icon").css({opacity:"0",transition:"all 1s"})
        $(".nav-link").hover(function(){
            $(this).css({color: "#ffcc25",transition:"all 1s"});
            }, function(){
                $(this).css({color: "white",transition:"all 1s"});
          });


    }
    
})

$("a").click(function(){
    var x=$(this).attr("href")
    var offsert=$(x).offset().top;
    $("html").animate({scrollTop:offsert},1000)
})

$(document).ready(function(){
    $("#loading").fadeOut(2000);
    $("html").css("overflow","auto");

})

$(".btn-icon").click(function(){
    $("html").animate({scrollTop:0},1000)
})

var time=document.getElementById("time");

function GetTimeNow(){
    var d =new Date();
    var h=d.getHours();
    var mi=d.getMinutes();
    var se=d.getSeconds();
    
    if(h>12){
        h=h%12;
        time.innerHTML=`${h}:${mi}:${se}pm `
    }else if(h==0){
        h=12;
        time.innerHTML=`${h}:${mi}:${se}am `
    
    }
    else{
        h=h;
        time.innerHTML=`${h}:${mi}:${se}am `
    }
    setTimeout(GetTimeNow,100)
}
GetTimeNow()
