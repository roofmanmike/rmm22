$('body').css("background-color", "darkGrey");
function getTime(){

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 2).padStart(2, '0');
var yyyy = today.getFullYear();
var inOneMonth = mm + '/' + dd + '/' + yyyy;
var dateMessage = "Generate a free online quote valid until " + inOneMonth;
$('#rmm1').text(dateMessage);
// $('#rmm2').text(d2);
}
getTime();
var tpo1 = $('#tpo1');
var quote2 = $('#quote2');
var qmess = $("#quoteMessage");
var qmess2 = $("#quoteMessage2");
var qmess3 = $('#quoteMessage3');

quote2.hide();


$("#btnStart").click(function(){
  qmess.html('<img id="icon" class="img-fluid rounded mb-4 mb-lg-0" src="gutter_blue.jpg" alt="..." />')
  qmess2.text("Enter width at run-off");
  qmess3.text('Enter Length of slope');
  tpo1.fadeOut();
  quote2.slideDown();
  quote2.scrollTop(0);
});
// --------------------
function printStuff(){
  const xx = $('#getRunoff').val();
  passItem(xx);
}
function passItem(item){
  console.log(item);
}
$("#btnThat").click(function(){
  const n = $('#getRunoff').val();
area();
});
function area(){
  const width = $('#getRunoff').val();
  const length = $('#getSlope').val();
  sum = mult(width, length);
  alert (sum);
}
// -----------------
function add(a,b){
let sum = Number(a) + Number(b);
  return sum;
}
function sub(a,b){
let sum = Number(a) - Number(b);
  return sum;
}function mult(a,b){
let sum = Number(a) * Number(b);
  return sum;
}
