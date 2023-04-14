/*******************************************************************
                            HEADER SECTION
********************************************************************/

/* Showing and hiding navigation on click (mobile) */

const toggle = document.querySelector(".toggle")
const navComponent = document.querySelectorAll("[data-navigation]")
const header = document.querySelector(".header")

toggle.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    header.classList.toggle("changeBgColor")
    navComponent.forEach(component => {
        component.classList.toggle("show")
    })
}

/* Showing and Hiding navigation when scrolling */

let prevPosition = 0

window.addEventListener("scroll", () => {
    let currentPosition = window.scrollY
    
    // If current position > previous position (scroll down), hide the navigation
    if (currentPosition > prevPosition) {
        header.classList.add("hide")
        
        header.classList.remove("changeBgColor")
        navComponent.forEach(component => {
            component.classList.remove("show")
        })
    } 
    // If current position < previous position (scroll up), show the navigation
    else if (currentPosition < prevPosition || prevPosition === 0) {
        header.classList.remove("hide")
    }

    // store the current position in prev position, to track the previous position
    prevPosition = currentPosition
})

/*******************************************************************
                            FEATURES SECTION
********************************************************************/

const featuresTab = document.querySelectorAll(".features__item")

featuresTab.forEach(tab => {
    // Add event listener 'click' to every tab
    tab.addEventListener("click", () => {
        const currentTab = tab.dataset.featuresTab //which tab is being selected (using data attribute 'data-features-tab')
        const allTabElements = document.querySelectorAll("[data-features-tab]") //Select all feature tab elements

        // Loop through all feature tab elements
        allTabElements.forEach( item => {
            // If the element matches currentTab, add 'active' class
            if (item.matches(`[data-features-tab='${currentTab}']`)) { 
                item.classList.add("active")
            } 
            // If doesn't match, remove 'active' class
            else {
                item.classList.remove("active")
            }
        })
    })
})

/*******************************************************************
                            FAQ SECTION
********************************************************************/

const faqItems = document.querySelectorAll(".faq__question")

// Add event listener to each faq question
faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const currentFaq = item.dataset.faq //which faq is being selected
        const currentAnswer = document.querySelector(`.faq__answer[data-faq="${currentFaq}"]`) //select the current answer of that faq 
        const arrowIcon = document.querySelector(`.arrow-icon[data-faq=${currentFaq}]`) //select the current arrow icon

        //Show or hide the answer of that particular faq
        currentAnswer.classList.toggle("open")
        arrowIcon.classList.toggle("open")
    })
})

/*******************************************************************
                        CONTACT US SECTION
********************************************************************/

const input = document.querySelector(".input input") //select input field
const alerts = document.querySelectorAll("[data-alert]") //select all alerts item (alert icon and alert text)

input.addEventListener("input", () => {
    // If the input is valid email
    if(input.validity.valid) {
        // Hide the alerts (add hide class)
        alerts.forEach(alert => {
            alert.classList.add("hide")
        })
    } 
    // If the input is not valid email
    else if (!input.validity.valid) {
        // Show the alerts (remove hide class)
        alerts.forEach(alert => {
            alert.classList.remove("hide")
        })
    }
})