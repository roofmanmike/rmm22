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
$("#btnStart").click(function(){
  alert("The paragraph was clicked.");
});
