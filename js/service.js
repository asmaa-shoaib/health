var servItem=document.getElementsByClassName("serv-but");
var overLay=document.getElementById("overLayService");
var overLayDiv=document.getElementById("overLayServiceCaption");
var imgs=document.getElementsByClassName("img");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var exit=document.getElementById("exit");
var pArray=[];
var currentIndex;

var currentIndex;
exit.addEventListener("click",function(){
    ex();
});
prev.addEventListener("click",function(){
    pre();
})
next.addEventListener("click",function(){
    nx();
})
function ex(){
    overLay.classList.remove("show");
}
function pre(){

}
function nx(){

}
for(var i=0;i<servItem.length;i++){
    servItem[i].addEventListener("click",function(e){ 
        pArray.push(imgs[i]);
        console.log(imgs[i]);
        overLay.classList.add("show");
        //overLayDiv.style.backgroundImage=
    })
}
/* 
$('.serv-but').click(function(){
    $('#overLayService').addClass("show")
})
$('#overLayServiceCaption').css({backgroundImage:`url(${srcImg})`}) */