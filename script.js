//Changes opacity of images.
var imgs = document.querySelectorAll('.wordimg') //change this to new class
var test = document.getElementById('button'); //route to new button
test.onclick = function myfunction() {
    imgs.forEach((img, i) => {
        img.style.opacity = "1";
    })
};

// changes font size/backround color/images position on remix button push
var colors = ['#760CE8', '#4782B1', '#E8890C'];
var font = ['4px', '5px', '10px', '12px', '6px', '15px', '13px', '18px', '22px', '3px']
var button = document.getElementById('button2'); //route to second button
var numbers = ['10%', '20', '30%', '40%', '50%', '60%', '70%', '80%', '0%', '5%']
var text = document.getElementById('text');
button.onclick = function() {
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
    text.style.fontSize = font[Math.floor((Math.random() * 10) + 1)];
    imgs.forEach((img, i) => {
        img.style.left = numbers[Math.floor((Math.random() * 10) + 1)];
    })
};

//Makes images positon random on page load
var body = document.querySelector("body")
body.onload = function() {
    imgs.forEach((img, i) => {
        img.style.left = numbers[Math.floor((Math.random() * 10) + 1)];
    })
};

