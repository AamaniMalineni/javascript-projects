const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button=document.getElementById("btn");
const colorname=document.querySelector(".color");
button.addEventListener('click',function(){
    const randomNumber=Math.floor(Math.random()*colors.length);
    colorname.textContent=colors[randomNumber];
    document.body.style.backgroundColor=colors[randomNumber];

});