/* Showing and hiding navigation */

const toggle = document.querySelector(".toggle")
const navComponent = document.querySelectorAll("[data-navigation]")
const header = document.querySelector(".header")

toggle.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    header.classList.toggle("changeBgColor")
    navComponent.forEach(component => {
        component.classList.toggle("show")
    })

    console.log(navComponent);
}