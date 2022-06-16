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
$('body').css("background-color", "darkGrey");
getTime();
var tpo1 = $('#tpo1');
var quote2 = $('#quote2');
var qmess = $("#quoteMessage");
var qmess2 = $("#quoteMessage2");
var qmess3 = $('#quoteMessage3');
var tpo2 = $('#tpo2');
var get_slope = $('#getSlope');
var runoff = $('#getRunoff');

get_slope.slideUp();
quote2.hide();
tpo2.hide();

// -----------------------
$("#btnStart").click(function(){
  $('#q1').html('<h3>Enter WIDTH at watershed run-off</h3>');
  $('#q1').after('<div class="d-grid gap-3 d-sm-flex justify-content-sm-center"><a class="btn btn-primary btn-lg px-4 me-sm-3" name="btnRunOff" onclick="alert_this();" id="btnRunOff">Enter</a></div>');
  $('#q1').after('<p class="lead text-white-50 mb-4"><input type="text" name="getRunoff" id="getRunoff" value="" placeholder="Width"><br><br></p>');
  $('#q1').after('<img id="icon" class="img-fluid rounded mb-4 mb-lg-0" src="gutter_blue.jpg" alt="..." /><hr class="wt_letter">');
  $('#q1').after('<p style="color:white">The side where water goes. If centrally drained, use either side</p>');

  // qmess.html('<img id="icon" class="img-fluid rounded mb-4 mb-lg-0" src="gutter_blue.jpg" alt="..." />')
  // $('#footer').hide();
  // tpo1.hide();
  // tpo2.show();
  // // quote2.slideDown()
  $("html, body").animate({ scrollTop: $('#nav1').offset().top }, 500);
});

function alert_this(){
  printStuff();
}
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
