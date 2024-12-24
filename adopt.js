// Save form data to localStorage
function saveFormData() {
  const form = document.getElementById('adoptionForm');
  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((value, key) => {
    if (key !== "house-photo") {
      formObject[key] = value;
    }
  });

  localStorage.setItem('adoptionFormData', JSON.stringify(formObject));
}

// Restore form data and selected pet image
function restoreFormData() {
  const isReturning = localStorage.getItem('isReturning');

  if (isReturning === "true") {
    const savedData = JSON.parse(localStorage.getItem('adoptionFormData'));
    const selectedPetImage = localStorage.getItem('selectedPetImage');

    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        const input = document.querySelector(`[name="${key}"]`);
        if (input) {
          if (input.type === 'radio') {
            input.checked = input.value === savedData[key];
          } else if (input.type === 'textarea' || input.type === 'text' || input.type === 'tel') {
            input.value = savedData[key];
          }
        }
      });
    }
  } else {
    // Clear localStorage for new visits
    localStorage.removeItem('adoptionFormData');
    localStorage.removeItem('selectedPetImage');
  }
}

// Redirect to pet selection
function redirectToPetSelection() {
  saveFormData();
  localStorage.setItem('isReturning', "true");

  const selectedPet = document.querySelector('input[name="pet-type"]:checked');
  if (selectedPet) {
    if (selectedPet.value === "cat") {
      window.location.href = "cat.html";
    } else if (selectedPet.value === "dog") {
      window.location.href = "dog.html";
    }
  } else {
    alert("Please select a pet type first!");
  }
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const form = document.getElementById('adoptionForm');
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const description = document.getElementById('description').value.trim();
  const selectedPet = document.querySelector('input[name="pet-type"]:checked');

  if (!name || !phone || !address || !description || !selectedPet) {
    alert("Please fill out all fields in the form before submitting.");
    return; // Stop further execution if form is incomplete
  }

  const selectedPetImage = localStorage.getItem('selectedPetImage');
  let message = `Congratulations, ${name}!`;
  if (selectedPetImage) {
    message += ` You have successfully adopted your pet!`;
  } else {
    message += ` Thank you for submitting your application.`;
  }

  alert(message);

  // Clear form and localStorage after submission
  localStorage.removeItem('adoptionFormData');
  localStorage.removeItem('selectedPetImage');
  localStorage.removeItem('isReturning');
  form.reset();
  window.location.href = "index.html";
}

// Clear form data and localStorage
function clearForm() {
  const form = document.getElementById('adoptionForm');
  form.reset();
  localStorage.removeItem('adoptionFormData');
  localStorage.removeItem('selectedPetImage');
  localStorage.removeItem('isReturning');
  alert("Form has been cleared.");
}

// Initialize: Restore form data only if returning
document.addEventListener('DOMContentLoaded', () => {
  restoreFormData();
  const form = document.getElementById('adoptionForm');
  form.addEventListener('submit', handleSubmit);
});
