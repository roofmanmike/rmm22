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
  $('#q1').after('<div class="d-grid gap-3 d-sm-flex justify-content-sm-center"><a class="btn btn-primary btn-lg px-4 me-sm-3" name="btnRunOff" onclick="btn2();" id="btnRunOff">Enter</a></div>');
  $('#q1').after('<p class="lead text-white-50 mb-4"><input type="text" name="getRunoff" id="getRunoff" value="" placeholder="Width"><br><br></p>');
  $('#q1').after('<img id="icon" class="img-fluid rounded mb-4 mb-lg-0" src="gutter_blue.jpg" alt="..." /><hr class="wt_letter">');
  $('#q1').after('<p id="pmess1" style="color:white">The side where water goes. If centrally drained, use either side</p>');
  $('#q2').hide();
  $('#q3').hide();
  $('#q4').hide();
  $('#q5').hide();
  $('#q6').hide();
  $('#btnStart').hide();
  $('#btnLearnMore').hide();
  $('#rmm1').hide();
  $("html, body").animate({ scrollTop: $('#nav1').offset().top }, 500);
});
$('#tpoLenDiv').hide();
function btn2(){
  tpo1.hide();
  $('#tpoLenDiv').show();
  
  $('#icon').hide();
  $('#btnRunoff').hide();
  $('#getRunoff').slideUp();
  $('#getLength').show();
  $('#pmess1').text('Bottom to top, or existing dimension')
  $('#q1').html('<h3>Enter LENGTH of slope</h3>');
  $('#q1').after('<img id="icon" class="img-fluid rounded mb-4 mb-lg-0" src="get_length_tpo.jpg" alt="..." /><hr class="wt_letter">');
  $("html, body").animate({ scrollTop: $('#nav1').offset().top }, 500);
  $('#pmess1').before('<div class="d-grid gap-3 d-sm-flex justify-content-sm-center"><a class="btn btn-primary btn-lg px-4 me-sm-3" name="btn5" id="btn5">Enter</a></div>');
}

let fieldArray = [];
function collectData(){
  let wide = width;
  let len = length;
  let xx = mult(wide, len);
  console.log(xx);
}
function printStuff(){
  const xx = $('#getRunoff').val();
  logItem(xx);

}

function logItem(item){
  console.log(item);
}
$("#btnThat").click(function(){
  const n = $('#getRunoff').val();
area();
});
let getWidth = $('#getRunoff');
let getLength = $('#getLength');
function area(){
  // const width = $('#getRunoff').val();
  // const length = $('#getSlope').val();
  sum = mult(width, length);
  fieldArray.push(sum);
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
