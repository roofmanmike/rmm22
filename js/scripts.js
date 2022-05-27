$('body').css("background-color", "darkGrey");
function getTime(){
const d = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

$('#rmm1').text(d);
}
getTime();
