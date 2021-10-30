var slider = document.getElementById("myRange");
var output = document.getElementById("number");
var moodoutput = document.getElementById("mood");
var count = 0;
var dfcolor;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  var count = this.value;
  console.log(count)
  if (count == 1){
	document.body.style.backgroundColor = "#ff2a1a";
	moodoutput.innerHTML = 'bad'
}
else if (count == 2
	) {
	document.body.style.backgroundColor = "#da6665";
	moodoutput.innerHTML = 'not bad'
}
else if (count == 3
	) {
	document.body.style.backgroundColor = "#f3d681";
	moodoutput.innerHTML = 'soso'
}
else if (count == 4
	) {
	document.body.style.backgroundColor = "#e6b3e6";
	moodoutput.innerHTML = 'good'
}
else if (count == 5
	) {
	document.body.style.backgroundColor = "#2137ff";
	moodoutput.innerHTML = 'perfect'
}

window.dfcolor = document.getElementById('bgcolor').style.backgroundColor;
//console.log(dfcolor)
console.log(dfcolor[4])}
console.log(document.getElementById('bgcolor').style.backgroundColor);
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("number1");
var moodoutput1 = document.getElementById("mood1");
var count1 = 0;
var r = dfcolor[0];
var g = dfcolor[1];
var b= dfcolor[2];


slider1.oninput = function() {
  output1.innerHTML = this.value;
  var count1 = this.value;
  if (count1 == 1){
  	var a = 1;
	document.body.style.backgroundColor = "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
	moodoutput1.innerHTML = 'bad'
}
else if (count1 == 2
	) {
	var a = 0.8;
	document.body.style.backgroundColor = "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
	moodoutput1.innerHTML = 'not bad'
}
else if (count1 == 3
	) {
	var a = 0.6;
	document.body.style.backgroundColor = "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
	moodoutput1.innerHTML = 'soso'
}
else if (count1 == 4
	) {
	var a = 0.4;
	document.body.style.backgroundColor = "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
	moodoutput1.innerHTML = 'good'
}
else if (count1 == 5
	) {
	var a = 0.2;
	document.body.style.backgroundColor = "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
	moodoutput1.innerHTML = 'perfect'
}
console.log(dfcolor)
}

