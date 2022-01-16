// menu show hidden
const navMenu = document.getElementById('nav_menu'), 
    toggleMenu = document.getElementById('nav_toggle'),
    closeMenu = document.getElementById('nav_close')

// show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// remove menu
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll section active link
const section = document.querySelectorAll('section[id');

window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollT = window.pageYOffset;

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = cureent.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId +']').classList.add('active');
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId +']').classList.remove('active');
        }
    })
}