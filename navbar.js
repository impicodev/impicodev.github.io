var navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 80)
        navbar.classList.add("nav-scrolled");
    else
        navbar.classList.remove("nav-scrolled");
});