const checkbox = document.getElementById('agreeCheckbox');
const proceedButton = document.getElementById('proceedButton');

checkbox.addEventListener('change', function() {
  proceedButton.disabled = !this.checked;
});

proceedButton.addEventListener('click', function() {
  alert('Thank you for agreeing to the Terms and Conditions! Proceeding to profile creation...');
  // Redirect to the next page
  window.location.href = "profile_creation.html"; // Change this to your desired next page
});
