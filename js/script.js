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