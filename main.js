//Loader
const loader = document.querySelector('.loader');
const all = document.querySelector('.all');

function init() {
	setTimeout(() => {
	  loader.style.opacity = 0;
	  loader.style.display = 'none';
  
	  all.style.display = 'block';
	  setTimeout(() => (all.style.opacity = 1), 50);
	}, 5000);
	
  }
  
init();
  
$(document).ready(function(){
    $(".toggle_menu").click(function(){
		$(".sidebar_menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
	});
	$(".fa-times").click(function(){
		$(".sidebar_menu").addClass("hide_menu");
		$(".toggle_menu").addClass("opacity_one");
	});

	
});
$('.port-item').click(function(){
    $('.collapse').collapse('hide');
  });
  

//Day and Night Toggle
const body = document.querySelector('body');
const box = document.querySelectorAll('.box');
const btn = document.querySelector('.btn');
const don = document.querySelector('.don')

let wallpaper = ["url('img/2244-2.jpg')","url('img/2244.jpg')"]
var checkbox = document.querySelector("input[type=checkbox]");

function toggleWallpaper(element,dayOrNight){
    document.querySelector(element).style.backgroundImage = wallpaper[dayOrNight]
    document.querySelector(element).style.WebkitTransition = "all 2s"
    document.querySelector(element).style.transition = "all 2s"
}
//skill 2 3


const date = new Date();

console.log(date.getHours())

function toggleTime(){
    const hours = date.getHours()
    const isDayTime = hours > 6 && hours < 18

    if(!isDayTime){
        checkbox.checked = true
        toggleWallpaper('.home',0);
		body.style.color = "white"
		body.style.backgroundColor = "#181818"
		don.textContent = "Looks like its night already, good night!"
    } else {
        checkbox.checked = false;
		toggleWallpaper('.home',1)
		body.style.color = "black"
		body.style.backgroundColor = "#fff"
		don.textContent = "Sun is still up! 加油!"
		
    }
}

window.addEventListener('DOMContentLoaded',toggleTime)