const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button=document.getElementById("btn");
const colorname=document.querySelector(".color");
button.addEventListener('click',function(){
    const randomNumber=Math.floor(Math.random()*hex.length);
    let hexColor='#';
    for(let i=0;i<6;i++){
        hexColor+=hex[randomNumber];
    }

    colorname.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;

});