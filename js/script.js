const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click",function() {
    navMenu.classList.toggle("active");
});

document.addEventListener("click", function (event) {

    if (
        !menuBtn.contains(event.target) &&
        !navMenu.contains(event.target)
    ) {
        navMenu.classList.remove("active");
    }

});