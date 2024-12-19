const checkbox = document.getElementById('agreeCheckbox');
const proceedButton = document.getElementById('proceedButton');

checkbox.addEventListener('change', function() {
  proceedButton.disabled = !this.checked;
});

proceedButton.addEventListener('click', function() {
  alert('Thank you for agreeing to the Terms and Conditions! Proceeding to profile creation...');
  window.location.href = "login.html"; 
});
