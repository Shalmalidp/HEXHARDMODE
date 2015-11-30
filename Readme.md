## Created a Hex clock and changing the background of the container to the hex value of the current time without #displayed
```
window.setInterval(function(){
var time = new Date();
var hours = time.getHours().toString(16).toUpperCase();

var minutes = time.getMinutes();
var seconds = time.getSeconds();
var digit_min = (minutes <10) ? "0"+ minutes : minutes;
var digit_sec = (seconds < 10) ? "0" + seconds : seconds;

var m = digit_min.toString(16).toUpperCase();
var s= digit_sec.toString(16).toUpperCase();

var display = (hours+m+s);

var hex = '#' + display; 

// console.log(hex);

 $('.clock-body').text(display).css('background-color',hex).css('color','white');
},1000); 
```

###Link to my Project : http://hexclock-hardmode-nohash-colorchange.surge.sh
