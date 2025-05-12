const singleItems = document.querySelectorAll('.single-items');

for (let i = 0; i < singleItems.length; i++ ) {
  const keyframes = {
    opacity: [0, 1],
  };
  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  singleItems[i].animate(keyframes, options);
}

const imageAreas = document.querySelectorAll('.image-area');

imageAreas.forEach(imageArea => {
  const audio = imageArea.querySelector('.audio-player');
  const icon = imageArea.querySelector('.play-icon');

  imageArea.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      icon.classList.remove('fa-circle-play');
      icon.classList.add('fa-circle-pause');
    } else {
      audio.pause();
      icon.classList.remove('fa-circle-pause');
      icon.classList.add('fa-circle-play');
    }
  });

  audio.addEventListener('ended', () => {
    icon.classList.remove('fa-circle-pause');
    icon.classList.add('fa-circle-play');
  });
});