// main.js - small UI helpers (mobile-friendly nav and form submission hints)
document.addEventListener('DOMContentLoaded', function(){
  // add a small success animation/alert after form submission if using Formspree's redirect capability
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      // Let the browser do the POST (Formspree). We'll show a quick temporary message.
      // If you want to handle via AJAX, replace with fetch to your Formspree endpoint.
      const submitBtn = form.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      setTimeout(() => {
        submitBtn.textContent = 'Submit Message';
        submitBtn.disabled = false;
      }, 2500);
    });
  }
});