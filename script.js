// Mobile Menu Toggle
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        hamburger.classList.toggle('toggle');
    });

    // Close menu when link is clicked
    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        });
    });
}

navSlide();

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animations (Intersection Observer)
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "-50px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, observerOptions);

sections.forEach(section => {
    // Add initial opacity 0 in JS or CSS class
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    
    observer.observe(section);
});

// Add fade-in class style dynamically or handle in CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .toggle .line2 {
        opacity: 0;
    }
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(styleSheet);


// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        // For demonstration processing:
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

