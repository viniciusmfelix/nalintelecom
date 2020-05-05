var menu = document.getElementById("container-nav-mobile-menu");
var header = document.getElementById("header");
var message = "Mantemos todos conectados, sempre.";
var i = 0;
var cursor = true;
var speedCursor = 450;

window.onload = typeWriter();

setInterval(() => {
  if(cursor) {
    document.getElementById("cursor").style.opacity = '0';
    cursor = false;
  } else {
    document.getElementById("cursor").style.opacity = '1';
    cursor = true;
  }
}, speedCursor)

function showNavMobileMenu() {
  if(header.offsetWidth <= 768) {
    if(menu.style.opacity === "0") {
      menu.style.opacity = "1";
    } else {
      menu.style.opacity = "0";
    }
  } else {
    menu.style.opacity = "0";
  }
}

function hideNavMobileMenu(width) {
  if(!width.matches) {
    menu.style.opacity = "0";
  }
}

var width = window.matchMedia("(max-width: 700px)");
hideNavMobileMenu(width);
width.addListener(hideNavMobileMenu);

function typeWriter() {
  var writer = document.getElementById("writer");
  var speed = 130;

  if(i < message.length) {
    writer.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  if(i === message.length) {
    window.setTimeout(showSecondMessage, 600);
  }
  
}

function showSecondMessage() {
  document.getElementById("fade-text").style.opacity = 1;
}

function hideNavMobileMenu() {
  document.getElementById("container-nav-mobile-menu").style.opacity = 0;
}


