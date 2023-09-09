/* My first JavaScript Code ... hehehe */

/* Functions */
function open1 () {
	document.querySelector('.pop-up1').style.display = "flex";
	document.querySelector('.pop-up2').style.display = "none";
	document.querySelector('.pop-up3').style.display = "none";
}

function exit1 () {
	document.querySelector('.pop-up1').style.display = "none";
}

function open2 () {
	document.querySelector('.pop-up2').style.display = "flex";
	document.querySelector('.pop-up1').style.display = "none";
	document.querySelector('.pop-up3').style.display = "none";
}

function exit2 () {
	document.querySelector('.pop-up2').style.display = "none";
}

function open3 () {
	document.querySelector('.pop-up3').style.display = "flex";
	document.querySelector('.pop-up1').style.display = "none";
	document.querySelector('.pop-up2').style.display = "none";
}

function exit3 () {
	document.querySelector('.pop-up3').style.display = "none";
}


/* Variables */
var btn1 = document.getElementById('ARROW1');
var btn2 = document.getElementById('arrow1');
var btn3 = document.getElementById('ARROW2');
var btn4 = document.getElementById('arrow2');
var btn5 = document.getElementById('ARROW3');
var btn6 = document.getElementById('arrow3');


/* Action */
btn1.addEventListener("click", open1);
btn2.addEventListener("click", exit1);

btn3.addEventListener("click", open2);
btn4.addEventListener("click", exit2);

btn5.addEventListener("click", open3);
btn6.addEventListener("click", exit3);
