function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}// JavaScript Document


function frases_oculta(id){
if (document.getElementById){ //se obtiene el id
var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
}
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
frases_oculta('frases_a_mostrar');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}


 

function playAudio() { 
var x = document.getElementById("myAudio");
    x.play(); 
} 

function pauseAudio() {
	var x = document.getElementById("myAudio"); 
    x.pause(); 
} 

function playAudio1() { 
var x = document.getElementById("myAudio1");
    x.play(); 
} 

function pauseAudio1() {
	var x = document.getElementById("myAudio1"); 
    x.pause(); 
} 


function playAudio2() { 
var x = document.getElementById("myAudio2");
    x.play(); 
} 

function pauseAudio2() {
	var x = document.getElementById("myAudio2"); 
    x.pause(); 
} 

function playAudio3() { 
var x = document.getElementById("myAudio3");
    x.play(); 
} 

function pauseAudio3() {
	var x = document.getElementById("myAudio3"); 
    x.pause(); 
}


function playAudio4() { 
var x = document.getElementById("myAudio4");
    x.play(); 
} 

function pauseAudio4() {
	var x = document.getElementById("myAudio4"); 
    x.pause(); 
}


function playAudio5() { 
var x = document.getElementById("myAudio5");
    x.play(); 
} 

function pauseAudio5() {
	var x = document.getElementById("myAudio5"); 
    x.pause(); 
}


function playAudio6() { 
var x = document.getElementById("myAudio6");
    x.play(); 
} 

function pauseAudio6() {
	var x = document.getElementById("myAudio6"); 
    x.pause(); 
}


function playAudio7() { 
var x = document.getElementById("myAudio7");
    x.play(); 
} 

function pauseAudio7() {
	var x = document.getElementById("myAudio7"); 
    x.pause(); 
}


function playAudio8() { 
var x = document.getElementById("myAudio8");
    x.play(); 
} 

function pauseAudio8() {
	var x = document.getElementById("myAudio8"); 
    x.pause(); 
}


function playAudio9() { 
var x = document.getElementById("myAudio9");
    x.play(); 
} 

function pauseAudio9() {
	var x = document.getElementById("myAudio9"); 
    x.pause(); 
}