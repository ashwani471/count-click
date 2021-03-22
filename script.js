var element=document.querySelector(".example");
var box=document.getElementById("box1");
box.addEventListener('click',function(){
  var x = element.innerText;
  x=parseInt(x)+1;
  if(x>=5){
      element.innerText=5;
  }
  element.innerText=x;
  console.log(x);
})