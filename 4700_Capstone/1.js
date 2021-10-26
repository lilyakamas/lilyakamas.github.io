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
}
console.log(count)
