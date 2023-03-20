let disp=document.getElementById("disp");
let count=10;
function int(){
    disp.innerText=count;
    if(count==0){
    clearInterval(inter);
    disp.innerText="Happy Independence Day";
    }
    count--;
}
let inter=setInterval(int,1000);
