//Changes opacity of images.
var imgs = document.querySelectorAll('.img1')
var test = document.getElementById('button');
test.onclick = function myfunction() {
   imgs.forEach((img, i)=>{
      img.style.opacity = "1";
   })
};
// changes font size/backround color/images position on remix button push
var colors = ['#760CE8', '#4782B1', '#E8890C'];
var font = ['4px','5px','10px', '12px', '6px', '15px', '13px', '18px', '22px', '3px'] 
var button = document.getElementById ('button2');
var numbers = ['5rem','10rem','15rem', '20rem', '25rem', '30rem', '35rem', '40rem', '45rem', '50rem'] 
var numberstwo = ['5rem','6rem','7rem', '8rem', '9rem', '10rem', '11rem', '12rem', '13rem', '14rem'] 
button.onclick = function (){
document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
document.getElementById('text').style.fontSize = font[Math.floor((Math.random() * 10) + 1)];
imgs.forEach((img, i)=>{
   img.style.left = numbers[Math.floor((Math.random() * 10) + 1)];
   img.style.bottom = numberstwo[Math.floor((Math.random() * 10) + 1)];
})
};
//Makes images positon random on page load
var body = document.querySelector("body")
body.onload = function(){
   imgs.forEach((img, i)=>{
      img.style.left = numbers[Math.floor((Math.random() * 10) + 1)];
      img.style.bottom = numberstwo[Math.floor((Math.random() * 10) + 1)];
   })
};