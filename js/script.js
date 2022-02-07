let navOpen = false;

function navFunction() {
    var burger = document.getElementById("nav-icon");
    burger.classList.toggle('open');
    var nav = document.getElementById("nav-menu");
    var mask = document.getElementById("nav-mask");
    var text = document.getElementsByClassName("nav-heading");
    if (navOpen == true) {
        text[0].style.display = "none";
        text[1].style.display = "none";
        nav.style.width = "0";
        navOpen = false;

        mask.style.opacity = 0;
        mask.style.cursor = "auto";
        mask.style.pointerEvents = "none";
        mask.style.zIndex = "1";
    }
    else {
        if (screen.width <= 768) {
            nav.style.width = "50vw";
        }
        else {
            nav.style.width = "20vw";
        }
        text[0].style.display = "block";
        text[1].style.display = "block";
        navOpen = true;

        mask.style.opacity = 1;
        mask.style.cursor = "pointer";
        mask.style.pointerEvents = "auto";
        mask.style.zIndex = "5";
    }
}