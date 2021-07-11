var request= new XMLHttpRequest();
var posts;
request.open("GET","https://jsonplaceholder.typicode.com/photos");
request.send();
request.onreadystatechange=function(){
    if(request.status==200 && request.readyState==4){
        posts=JSON.parse(request.response);
        displayNews();

    }
}

function displayNews(){
    var temp='';
    for(var i=0;i<12;i++){
        temp+=`<div class="col-md-2 col-lg-3 mb-2">
            <div class="card">
                <img class="card-img-top" src="${posts[i].thumbnailUrl}" >
                <div class="card-body">
                    <h4 class="card-title text-white ">code:${posts[i].id}</h4>
                    <p class="card-text">${posts[i].title}</p>
                </div>
            </div>
        </div>`
    }
    //console.log(posts)
    document.getElementById("healthNewsRow").innerHTML=temp;
}