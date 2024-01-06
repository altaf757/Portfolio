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

      displayError(thisForm, 'This functionality is not avaliable. please user your local email service. note (by filling out the fields and submit will auto open your local email service.)');
      
      
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
