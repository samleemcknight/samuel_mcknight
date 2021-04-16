console.log("Welcome to my portfolio!")

let mobileWidth = window.matchMedia("(max-width: 991px)");
let desktopWidth = window.matchMedia("(min-width: 991px)")

const navBrand = document.querySelector('.navbar-brand')

const aboutNav = document.getElementById("aboutNav")
const projectNav = document.getElementById("projectNav")
const contactNav = document.getElementById("contactNav")

const navBarDropDown = document.getElementById("navbarNavDarkDropdown")

mobileWidth.addEventListener("change", () => {
  if (mobileWidth.matches) {
    navBrand.addEventListener("click", () => {
      navBrand.innerHTML = "Samuel McKnight"
    })

    aboutNav.addEventListener("click", () => {
      navBrand.innerHTML = "About"
      navBarDropDown.className = "collapsing"
    })

    projectNav.addEventListener("click", () => {
      navBrand.innerHTML = "Projects"
      navBarDropDown.className = "collapsing"
    })

    contactNav.addEventListener("click", () => {
      navBrand.innerHTML = "Contact"
      navBarDropDown.className = "collapsing"
    })
  }
})

desktopWidth.addEventListener("change", () => {
  if (desktopWidth.matches) {  
    navBarDropDown.classList.remove("collapsing")
  }
})

const myCarousel = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false
})

const myCarousel2 = document.querySelector('#myCarousel2')
const carousel2 = new bootstrap.Carousel(myCarousel2, {
  interval: false,
  wrap: false
})

const chevronOne = document.getElementById('chevronOne')
const chevronTwo = document.getElementById('chevronTwo')
const p = document.getElementById('chevronText')

chevronOne.addEventListener('mouseover', () => {
  p.style.animationName = "fadeIn"
  p.textContent = "In Progress"
  setTimeout(() => {
    p.style.animationName = ""
    
  }, 400);
})

chevronTwo.addEventListener('mouseover', () => {
  p.style.animationName = "fadeIn"
  p.textContent = "Past Projects"
  setTimeout(() => {
    p.style.animationName = ""
    
  }, 400);
})