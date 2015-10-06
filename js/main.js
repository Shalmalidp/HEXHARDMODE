(function(){

window.setInterval(function(){
var time = new Date();
var hours = time.getHours().toString(16).toUpperCase();

var minutes = time.getMinutes();
var seconds = time.getSeconds();
//var textNode;
var hours = (hours <10) ? "0"+ hours : hours;
var digit_min = (minutes <10) ? "0"+ minutes : minutes;
var digit_sec = (seconds < 10) ? "0" + seconds : seconds;
;
var m = digit_min.toString(16).toUpperCase();
var s= digit_sec.toString(16).toUpperCase();
// var h = parseInt(hours, 16);
// var m = parseInt(digit_min,16);
// var s = parseInt(digit_sec,16);

var display = (hours+m+s);

var hex = '#' + display; 

// console.log(hex);
// console.log(hex2);
//var textNode= document.createTextNode(currenttime);
 $('.clock-body').text(hex).css('background-color',hex).css('color','white');
},1000);


})();
