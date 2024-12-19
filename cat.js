function enlargeImage(imgElement) {
  const overlay = document.getElementById('overlay');
  const enlargedImage = document.getElementById('enlargedImage');
  enlargedImage.src = imgElement.src;
  overlay.style.display = 'flex';
}

function closeImage() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function adoptPet() {
  const enlargedImage = document.getElementById('enlargedImage');
  alert(`You have chosen to adopt ${enlargedImage.alt}. Congratulations!`);
  closeImage();
}
