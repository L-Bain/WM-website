function navFunction() {
    var burger = document.getElementById("nav-icon");
    burger.classList.toggle('open');
    var nav = document.getElementsByClassName("nav-menu")[0];
    if (nav.style.display == "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
}