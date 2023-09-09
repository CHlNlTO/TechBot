/* My third JavaScript Code ... hehehe :) */

/* Functions */
function open1 () {
	document.querySelector(".popup1").style.display = "flex";
	document.querySelector(".popup2").style.display = "none";
	document.querySelector(".popup3").style.display = "none";
	document.querySelector(".close").style.display = "flex";
	document.querySelector(".popup-bg").style.display = "flex";
	document.querySelector("#arrowright1").style.display = "flex";
	document.querySelector("#arrowleft1").style.display = "flex";
	document.querySelector("#arrowright2").style.display = "none";
	document.querySelector("#arrowleft2").style.display = "none";
	document.querySelector("#arrowleft3").style.display = "none";
	document.querySelector("#arrowright3").style.display = "none";	
	}
function open2 () {
	document.querySelector(".popup2").style.display = "flex";
	document.querySelector(".popup1").style.display = "none";
	document.querySelector(".popup3").style.display = "none";	
	document.querySelector(".close").style.display = "flex";
	document.querySelector(".popup-bg").style.display = "flex";
	document.querySelector("#arrowright2").style.display = "flex";
	document.querySelector("#arrowleft2").style.display = "flex";
	document.querySelector("#arrowright1").style.display = "none";
	document.querySelector("#arrowleft1").style.display = "none";
	document.querySelector("#arrowleft3").style.display = "none";
	document.querySelector("#arrowright3").style.display = "none";	
	}
function open3 () {
	document.querySelector('.popup3').style.display = "flex";
	document.querySelector(".popup1").style.display = "none";
	document.querySelector(".popup2").style.display = "none";
	document.querySelector(".close").style.display = "flex";
	document.querySelector(".popup-bg").style.display = "flex";
	document.querySelector("#arrowleft3").style.display = "flex";
	document.querySelector("#arrowright3").style.display = "flex";
	document.querySelector("#arrowright2").style.display = "none";
	document.querySelector("#arrowleft2").style.display = "none";
	document.querySelector("#arrowright1").style.display = "none";
	document.querySelector("#arrowleft1").style.display = "none";
}





/* Variables */
var img1 = document.getElementById("class-picture-1");
var img2 = document.getElementById("class-picture-2");
var img3 = document.getElementById("class-picture-3");
var arrow1 = document.getElementById("arrowright1");
var arrow2 = document.getElementById("arrowleft1");
var arrow3 = document.getElementById("arrowright2");
var arrow4 = document.getElementById("arrowleft2");
var arrow5 = document.getElementById("arrowright3");
var arrow6 = document.getElementById("arrowleft3");



/* Actions */
img1.addEventListener("click", open1);
img2.addEventListener("click", open2);
img3.addEventListener("click", open3);
arrow1.addEventListener("click", open2);
arrow2.addEventListener("click", open3);
arrow3.addEventListener("click", open3);
arrow4.addEventListener("click", open1);
arrow5.addEventListener("click", open1);
arrow6.addEventListener("click", open2);



















