//Changes opacity of images.
var imgs = document.querySelectorAll('.wordimg')
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
var numbers = ['10%','20','30%', '40%', '50%', '60%', '70%', '80%', '0%', '5%'] 
var text = document.getElementById('text');
button.onclick = function (){
document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
text.style.fontSize = font[Math.floor((Math.random() * 10) + 1)];
imgs.forEach((img, i)=>{
   img.style.left = numbers[Math.floor((Math.random() * 10) + 1)];
})
};

//Makes images positon random on page load
var body = document.querySelector("body")
body.onload = function(){
   imgs.forEach((img, i)=>{
      img.style.left = numbers[Math.floor((Math.random() * 10) + 1)];
   })
};

//gets info from airtable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyAp5mElEZBzvzF9'
});

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyAp5mElEZBzvzF9" }).base(
  "appsvJW4wdukn0eeh"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("ai").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our book data
const phrase = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // add the records from this page to our books array
  phrase.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllBooks(err) {
  console.log("gotAllBooks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogBooks();
  showBooks();
}

// just loop through the books and console.log them
function consoleLogBooks() {
  console.log("consoleLogBooks()");
  phrase.forEach((phrase) => {
    console.log("phrase:", phrase);
  });
}



