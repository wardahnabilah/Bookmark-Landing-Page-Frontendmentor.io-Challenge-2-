/*******************************************************************
                            HEADER SECTION
********************************************************************/

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