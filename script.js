var allowCount = 7;
$( function() {
    $( "#ul" ).sortable();

    $( "#ul" ).disableSelection();

  } );




var input = document.querySelectorAll('input');

var ul = document.getElementById('ul');

function start() {
	if(allowCount) {
		for (var i = 0; i < input.length; i++) {

			var li = document.createElement('li');

			ul.appendChild(li);

			li.innerHTML = input[i].value;

			var red = parseInt(Math.random()*255);

			var green = parseInt(Math.random()*255);

			var blue = parseInt(Math.random()*255);

			var color = `rgb(${red},${green},${blue})`;

			li.style.backgroundColor = color;
			
		}
		allowCount--;
	}
}	