document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.toggle('show');
        document.body.style.overflow = nav.classList.contains('show') ? 'hidden' : '';
    });
    
    // Close menu when clicking outsid
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && window.innerWidth <= 768) {
            nav.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    nav.classList.remove('show');
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        backToTopBtnservice_ddcxwqs.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
    // Add this to your existing script.js
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            emailjs.send("service_ddcxwqs","template_pno9n5n", {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            })
            .then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
        });
    }
    // // Form submission
    // const contactForm = document.querySelector('.contact-form');
    // if (contactForm) {
    //     const handleFormSubmit = async (e) => {
    //         e.preventDefault();
            
    //         const form = e.target;
    //         const submitBtn = form.querySelector('button[type="submit"]');
    //         const originalBtnText = submitBtn.innerHTML;
            
    //         // Loading state
    //         submitBtn.disabled = true;
    //         submitBtn.innerHTML = `
    //             <span class="spinner" aria-hidden="true"></span>
    //             <span class="sr-only">Sending...</span>
    //         `;
            
    //         try {
    //             const formData = new FormData(form);
    //             const response = await fetch(form.action, {
    //                 method: 'POST',
    //                 body: formData,
    //                 headers: {
    //                     'Accept': 'application/json'
    //                 }
    //             });
                
    //             if (!response.ok) throw new Error('Network response was not ok');
                
    //             // Success feedback
    //             submitBtn.innerHTML = `
    //                 <i class="fas fa-check-circle" aria-hidden="true"></i>
    //                 <span class="sr-only">Success!</span> Sent
    //             `;
                
    //             // Haptic feedback on mobile
    //             if ('vibrate' in navigator) {
    //                 navigator.vibrate([50, 50, 50]);
    //             }
                
    //             form.reset();
                
    //             setTimeout(() => {
    //                 submitBtn.innerHTML = originalBtnText;
    //                 submitBtn.disabled = false;
    //             }, 3000);
                
    //         } catch (error) {
    //             console.error('Submission error:', error);
                
    //             // Error feedback
    //             submitBtn.innerHTML = `
    //                 <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    //                 <span class="sr-only">Error!</span> Try Again
    //             `;
                
    //             // Mobile error message
    //             if (window.innerWidth <= 768) {
    //                 const errorAlert = document.createElement('div');
    //                 errorAlert.className = 'mobile-error-alert';
    //                 errorAlert.textContent = 'Failed to send. Please check your connection.';
    //                 form.prepend(errorAlert);
                    
    //                 setTimeout(() => {
    //                     errorAlert.remove();
    //                 }, 5000);
    //             }
                
    //             setTimeout(() => {
    //                 submitBtn.innerHTML = originalBtnText;
    //                 submitBtn.disabled = false;
    //             }, 2000);
    //         }
    //     };
        
    //     contactForm.addEventListener('submit', handleFormSubmit);
        
    //     // Mobile touch validation
    //     if ('ontouchstart' in window) {
    //         const submitBtn = contactForm.querySelector('button[type="submit"]');
    //         submitBtn.addEventListener('touchend', function(e) {
    //             if (!contactForm.checkValidity()) {
    //                 e.preventDefault();
    //                 const invalidFields = contactForm.querySelectorAll(':invalid');
    //                 invalidFields.forEach(field => {
    //                     field.style.borderColor = '#ff4444';
    //                     setTimeout(() => {
    //                         field.style.borderColor = '';
    //                     }, 2000);
    //                 });
                    
    //                 if ('vibrate' in navigator) {
    //                     navigator.vibrate(200);
    //                 }
    //             }
    //         });
    //     }
    // }
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.expertise-card, .project-card, .timeline-item, .certification-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // iOS input zoom prevention
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.fontSize = '16px';
            });
            input.addEventListener('blur', function() {
                this.style.fontSize = '';
            });
        });
    }
});
