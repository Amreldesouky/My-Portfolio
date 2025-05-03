// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust offset if needed, considering navbar height
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.querySelector('a').classList.remove('active');
        if(li.querySelector('a').getAttribute('href').substring(1) === current){
            li.querySelector('a').classList.add('active');
        }
    })
    // Special case for top of page
    if (pageYOffset < sections[0].offsetTop - 56) { // 56 is approx navbar height
         navLi.forEach( li => li.querySelector('a').classList.remove('active'));
         const homeLink = document.querySelector('nav .container ul li a[href="#home"]');
         if (homeLink) {
             homeLink.classList.add('active');
         }
    }
});

// Optional: Add form submission handling here if needed (e.g., using Formspree or similar)
// Example:
// const contactForm = document.querySelector('#contact form');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Add logic to handle form submission (e.g., send data via fetch)
//     alert('Form submitted (placeholder)!');
// });
