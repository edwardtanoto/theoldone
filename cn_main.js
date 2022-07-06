//Loader
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const body = document.querySelector('body');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 5000);
  setTimeout(typeAnim, 5000);
  
}

init();


//Day and Night Toggle
let wallpaper = ["url('images/night.jpg')","url('images/bg2.jpg')","url('images/bg4.2_2.jpg')","url('images/bg4-night.jpg')"]
var checkbox = document.querySelector("input[type=checkbox]");

function toggleWallpaper(element,dayOrNight){
    document.querySelector(element).style.backgroundImage = wallpaper[dayOrNight]
    document.querySelector(element).style.WebkitTransition = "all 2s"
    document.querySelector(element).style.transition = "all 2s"
}
//skill 2 3
if(checkbox){
    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            toggleWallpaper('.main',0)
            toggleWallpaper('#profile-section',3)
            body.style.backgroundColor = "#0c0b27"
        } else {
            toggleWallpaper('.main',1)
            toggleWallpaper('#profile-section',2)
            body.style.backgroundColor = "#3b1b32"
        }
    });
    
}

const date = new Date();

console.log(date.getHours())

function toggleTime(){
    const hours = date.getHours()
    const isDayTime = hours > 6 && hours < 18

    if(!isDayTime){
        checkbox.checked = true
        toggleWallpaper('.main',0)
        toggleWallpaper('#profile-section',3)
        body.style.backgroundColor = "#0c0b27"
    } else {
        checkbox.checked = false;
        toggleWallpaper('.main',1)
        toggleWallpaper('#profile-section',2)
        body.style.backgroundColor = "#3b1b32"
    }
}

window.addEventListener('DOMContentLoaded',toggleTime)

//Type Animation
let summary = document.querySelector('.about');

let htmlSummaryText = `<div class="summary"></div>`
summary.innerHTML+= htmlSummaryText;

let summaryTextValue = `你好，世界！我叫陈永德，我是热情的程序员，也是宁波诺丁汉大学的计算机科学学生。<br><br> 我在这里要出改变，要学习，也想制作超越二进制的代码。`

let summaryText = document.querySelector(".summary");
summaryText.innerHTML = '';

//type animation summary
let wordIndex = 0;

function typeAnim(){
    let text = '';
    text = summaryTextValue.substring(0, text.length + wordIndex);
    summaryText.innerHTML = text
    if(wordIndex!=summaryTextValue.length){
        setTimeout(typeAnim, 90);
        wordIndex++;
    }
}

//Side Bar
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
