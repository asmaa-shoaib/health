var secDis=document.getElementById("reviews");
var overLayAlarm=document.getElementById("overLayAlarm");
var inputs=document.getElementsByClassName("form-control");
var nam =document.getElementById("name");
var mail =document.getElementById("mail");
var phone =document.getElementById("phone");
var text =document.getElementById("text");
var send =document.getElementById("send");
var clear =document.getElementById("clear");
var del =document.getElementById("delete");
var messages=[];
var message={};
var hidealarm=document.getElementById("hideAlarm");
hidealarm.addEventListener("click",function(){
    hideAlarm();
})


if(localStorage.getItem("MessageList")==null){
   // secDis.style.display="none";
    var messages=[]
}else{
    secDis.classList.add("d-block")
    messages=JSON.parse(localStorage.getItem("MessageList"))
    displayForm();
}
send.addEventListener("click",function(){
    addMessage();
   // displayForm()
})
del.addEventListener("click",function(){
   delMessage();
})
clear.addEventListener("click",function(){
    delMssages();
})
function addMessage(){
    if(nam.value!=""&&phone.value!=""&&mail.value!=""&&text.value!=""){

    message={
        name:nam.value,
        phone:phone.value,
        mail:mail.value,
        text:text.value
    }
    console.log(message);
    messages.push(message);
    localStorage.setItem("MessageList",JSON.stringify(messages));
    console.log(messages);
    clrForm();
    displayForm();
}
else{
    //alert("non")
    disalarm();
}
}

function delMessage(){
    messages.pop();
    localStorage.setItem("MessageList",JSON.stringify(messages));
    displayForm();
}
function delMssages(){
    messages=[]
    localStorage.setItem("MessageList",JSON.stringify(messages))
    displayForm();
}



function clrForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}
function deletItem(index){
    messages.splice(index,1);
    localStorage.setItem("MessageList",JSON.stringify(messages))
    displayForm();
    
}
/* var delt=document.getElementById('deletItem');
delt.addEventListener("click",function(){
    deletItem(n)
}) */
function displayForm(){
    var temp='';
    for (var n=0;n<messages.length;n++){
        temp+=`<div class="col-md-4 col-lg-3 mb-2   ">
        <div class="review-item p-2 px-3 ">
            <h4>${messages[n].name}</h4>
            <p>${messages[n].phone}</p>
            <p>${messages[n].mail}</p>
            <span>${messages[n].text}</span>
            <button id="deletItem" class='btn ' onclick=deletItem(${n})><i class="fas fa-window-close text-dark"></i></button>
          
        </div>
    </div>`
    }

    document.getElementById("review").innerHTML=temp
}
function disalarm(){
    overLayAlarm.classList.add("show");
}

function hideAlarm(){
    overLayAlarm.classList.remove("show")
}