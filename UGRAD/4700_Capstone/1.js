var slider = document.getElementById("myRange");
var output = document.getElementById("number");
var moodoutput = document.getElementById("mood");
var count = 0;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  var count = this.value;
  console.log(count)
  if (count == 1){
	document.body.style.backgroundColor = "#DE3163";
	moodoutput.innerHTML = '&#128544;'
}
else if (count == 2
	) {
	document.body.style.backgroundColor = "#F4A460";
	moodoutput.innerHTML = '&#128551;'
}
else if (count == 3
	) {
	document.body.style.backgroundColor = "#CCCCFF";
	moodoutput.innerHTML = '&#128533;'
}
else if (count == 4
	) {
	document.body.style.backgroundColor = "#40E0D0";
	moodoutput.innerHTML = '&#128515;'
}
else if (count == 5
	) {
	document.body.style.backgroundColor = "#6495ED";
	moodoutput.innerHTML = '&#128541;'
}
}

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("number1");
var moodoutput1 = document.getElementById("mood1");
var count1 = 0;
// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  output1.innerHTML = this.value;
  var count1 = this.value;
  console.log(count)
  if (count1 == 1){
	document.getElementById('sectioncolor').style.backgroundColor = "#ff2a1a";
	moodoutput1.innerHTML = '&#128574;'
}
else if (count1 == 2
	) {
	document.getElementById('sectioncolor').style.backgroundColor = "#da6665";
	moodoutput1.innerHTML = '&#128575;'
}
else if (count1 == 3
	) {
	document.getElementById('sectioncolor').style.backgroundColor = "#f3d681";
	moodoutput1.innerHTML = '&#128572;'
}
else if (count1 == 4
	) {
	document.getElementById('sectioncolor').style.backgroundColor= "#e6b3e6";
	moodoutput1.innerHTML = '&#128568;'
}
else if (count1 == 5
	) {
	document.getElementById('sectioncolor').style.backgroundColor = "#2137ff";
	moodoutput1.innerHTML = '&#128571;'
}
}

