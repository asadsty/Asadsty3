const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinkLi = document.querySelectorAll('.nav-links li')


window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('acttive')
})

navLinkLi.forEach(li=> li.addEventListener('click',()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')
}))

// Typed JS
var options = {
    strings: [
        'Creative Agency','Typed Js is Awesome','Asadsty',
        'The Future is Here','Data Scienetiest','Asadsty'
    ],
    typeSpeed: 40,
    loop: false,
    loopCount:Infinity,
    typeSpeed:10,
    backDelay:2000,

};

var typed = new Typed('#hero-titles',options)

AOS.init();