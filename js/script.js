document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
        } else {
            alert("Form submitted successfully!");
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Image Gallery Modal
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            modal.classList.add('open');
            const modalImage = document.createElement('img');
            modalImage.src = image.src;
            while (modal.firstChild) {
                modal.removeChild(modal.firstChild);
            }
            modal.appendChild(modalImage);
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Smooth Scroll
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Year Update
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Your Name. All rights reserved.`;
});
