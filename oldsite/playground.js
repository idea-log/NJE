  /*  function printTime() {
  var d = new Date();
  var month = d.getMonth();
  var year = d.getFullYear();
  var date = d.getDate();
  var day = d.getDay();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();

var timestamp = document.getElementById("playground");
timestamp.innerHTML = date+"."+month+"."+year+"<br/>"+hours+":"+mins+":"+secs;

}
setInterval(printTime, 2000);


var arr =  document.getElementsByClassName("timestamp");
//accessing the second element
arr[0].innerHTML = "timestamp";
*/

 	var arr = document.getElementById("navigation");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}

$(function function_name(argument) {$("header-nav").hide()



var images = [
"http://1.bp.blogspot.com/-q8Qw-ga3FS8/TqHZnMpy2qI/AAAAAAAAD9k/1X3L3o0Y8qI/s1600/InfluentialPicture.jpg", 
"https://c1.staticflickr.com/1/284/31285974754_156dcbe787_b.jpg",
"https://c2.staticflickr.com/6/5620/20871128218_410bb1d9d8_b.jpg",
"https://upload.wikimedia.org/wikipedia/commons/f/fb/Winslow_Homer_-_Snap_the_Whip_%28Butler_Institute_of_American_Art%29.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg/1024px-Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg",
"https://c1.staticflickr.com/1/583/20873683499_908840ca7d_b.jpg",
"https://c2.staticflickr.com/6/5627/20873607119_47d213ff75_o.jpg",
"https://c1.staticflickr.com/1/584/21032882806_1b212590be_b.jpg",
"https://c1.staticflickr.com/1/708/21049065532_2c7b08aee9_o.jpg",
"https://c1.staticflickr.com/1/599/20438118853_e58bac4be6_b.jpg",
"http://www.linguisticsociety.org/sites/default/files/tree_1.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg/1280px-El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1024px-The_Great_Wave_off_Kanagawa.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lightnings_below_the_summit.jpg/1024px-Lightnings_below_the_summit.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg/800px-Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Naiad1.jpg/1280px-Naiad1.jpg",
"https://c5.staticflickr.com/6/5612/31684740452_bf0ca42de9_o.jpg",
"https://c3.staticflickr.com/1/717/31684741482_6885e85124_o.jpg",
"https://c1.staticflickr.com/1/531/31831748275_d2b1688027_o.jpg",
"https://c1.staticflickr.com/1/559/31715614471_c463a0eceb_o.jpg",
"https://c1.staticflickr.com/1/639/21067064791_a8a3701c24_b.jpg",
"https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg",

];


var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}

/*  Changing the background colour of P elements
$(function() {
  alert($("p").css("background-color"));
  $("p").css("background-color", "cadetblue");
}); */ 