
//#region Menu
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    /*===============  MENU SHOW===============*/
    if (navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        })
    }

    /*===============  MENU HiDE ===============*/
    if (navClose){
        
        navClose.addEventListener('click', () =>{
           
            navMenu.classList.remove('show-menu');
        })
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink =document.querySelectorAll('.nav_link');

    const linkAction = () =>{   
       navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));





//#endregion

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header =document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add ('shadow-header') 
                        : header.classList.remove('shadow-header');

}
window.addEventListener('scroll', shadowHeader)
/*=============== EMAIL JS ===============*/
const contactForm =document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');


const sendEmail =(e)=>{
    e.preventDefault();
    //serviceId , templateID, #form, publickey
    emailjs.sendForm('service_ersar35','template_6tg2loy','#contact-form','wOg6m7Kzt6715QF9B').then(()=>{
        contactMessage.textContent = 'Message Sent'

        setTimeout(()=>{           
            contactMessage.textContent=''
        },5000 )
        contactForm.reset();
    },() =>{
        contactMessage.textContent = 'Message Not Sent (service Error)'
    })
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height,
    // add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin : 'top',
    distance :'60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.home_profile, .contact_mail`, {origin: 'right'})
sr.reveal(`.home_name,  .home_info, section_title-1, .contact_social, .contact_data ` ,{origin: 'left'})
sr.reveal(`.skill_box,  .projects_card ` ,{intervl: 100 ,origin: 'top'})