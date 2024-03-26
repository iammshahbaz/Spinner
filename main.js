// let container = document.querySelector('.container')
// let btn = document.getElementById('spin')
// let number = Math.ceil(Math.random() *1000)


// btn.onclick = function(){
//     container.style.transform = "rotate(" +number +"deg)";
//     number+= Math.ceil(Math.random() * 1000);
// }

let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let rotationSpeed = 2500; // Adjust this value to change rotation speed
let currentRotation = 0;

btn.onclick = function(){
    currentRotation += rotationSpeed;
    container.style.transform = "rotate(" + currentRotation + "deg)";
};
