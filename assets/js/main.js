/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .skill, .experiences__container, education__img',{delay: 400}); 
sr.reveal('.home__social-icon, experience__cont, education__img',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .skill',{interval: 200}); 


/*===== POP UP BUTTON =====*/
// function togglePopup() {
//     // var popup = document.getElementById("popup");
//     // var popup = button.nextElementSibling;
//     // if (popup.style.display === "block") {
//     //     popup.style.display = "none";
//     // } else {
//     //     popup.style.display = "block";
//     // }
    
// }

function togglePopup(button) {
    var popup;

    // Jika tombol yang diklik adalah tombol "Close (×)", cari parent terdekat dengan class "popup"
    if (button.classList.contains("close-btn")) {
        popup = button.parentElement;
    } 
    // Jika tombol yang diklik adalah tombol utama (open-btn), cari popup dalam parent container
    else {
        popup = button.parentElement.querySelector(".popup");
    }

    // Toggle class active untuk menampilkan atau menyembunyikan popup
    popup.classList.toggle("active");
}

// Menutup popup jika klik di luar
document.addEventListener("click", function(event) {
    let popups = document.querySelectorAll(".popup");

            popups.forEach(popup => {
                if (!popup.contains(event.target) && !popup.previousElementSibling.contains(event.target)) {
                    popup.classList.remove("active");
                }
            });
});

// Mencegah popup tertutup saat klik di dalamnya
document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});