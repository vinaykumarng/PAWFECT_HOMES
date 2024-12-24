function enlargeImage(imgElement) {
  const overlay = document.getElementById('overlay');
  const enlargedImage = document.getElementById('enlargedImage');
  enlargedImage.src = imgElement.src;
  enlargedImage.alt = imgElement.alt;
  overlay.style.display = 'flex';
}

function closeEnlargedImage() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function adoptPet() {
  const enlargedImage = document.getElementById('enlargedImage');

  const confirmAdoption = confirm(
    `You have selected ${enlargedImage.alt}. Click on 'OK' to continue submitting your application`
  );

  if (confirmAdoption) {
    localStorage.setItem('selectedPetImage', enlargedImage.src);
    localStorage.setItem('isReturning', "true");
    window.location.href = 'adopt.html';
  }
}
