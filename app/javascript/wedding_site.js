document.addEventListener("DOMContentLoaded", function() {
    // Splash screen animation
    const splashScreen = document.getElementById('splash-screen');
  const logo = document.querySelector('.logo');
  
  // After 2 seconds, scale down the logo and fade out the splash screen
  setTimeout(function() {
    // Logo will begin its scale down animation (from the CSS keyframes)
    
    // After animation completes, fade out the splash screen
    setTimeout(function() {
      splashScreen.classList.add('fade-out');
      
      // After the fade animation is complete, hide the splash screen completely
      setTimeout(function() {
        splashScreen.classList.add('hidden');
        document.body.classList.add('loaded');
      }, 1000); // This matches the transition duration in CSS
    }, 500); // Time for logo to shrink
  }, 2000); // Show logo for 2 seconds before starting final transition

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
    
    // Hero slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip links with just "#"
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
    console.log("Wedding site JS loaded"); // Add this for debugging
});