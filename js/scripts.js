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
var qmess = document.getElementById("quoteMessage");
var qmess2 = document.getElementById("quoteMessage2");

$("#btnStart").click(function(){
  qmess.innerHTML = "Water Shed";
  qmess2.innerHTML = "Gutter or Drain as WIDTH";
  tpo1.hide();
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
