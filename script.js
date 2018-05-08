
/*  ---------------  Navigation    ------------*/

var bar = document.querySelector("#lines");
var nav2 = document.querySelector("#nav2");
var con = true;
bar.addEventListener("click",function(){
    if(con == true){
        nav2.style.display="flex";
        con = false;
    }
    else{
        nav2.style.display="none";
        con = true;
    }
})