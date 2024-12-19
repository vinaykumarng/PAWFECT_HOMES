function redirectToPetSelection() {
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
  