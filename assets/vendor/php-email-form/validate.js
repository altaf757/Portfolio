/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();
      let thisForm = this;

      displayError(thisForm, "Oops! It seems our server is currently taking a coffee break ☕. Don't worry,Redirecting you to your default email application with the  pre-filled details. We're keen to hear from you!");
      
      
      let formData = new FormData( thisForm );
      var mailtoUrl = `mailto:altafbalti757@gmail.com?subject=${formData.get('subject')}&body=${formData.get('message')}`;
      window.location.href=mailtoUrl;


    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
