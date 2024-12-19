function enlargeImage(imgElement) {
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlargedImage');
    enlargedImage.src = imgElement.src;
    overlay.style.display = 'flex';
    event.stopPropagation();
  }
  
  function closeEnlargedImage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  