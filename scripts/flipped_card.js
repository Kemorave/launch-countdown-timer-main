function startFlipper() {
  flipDown("flip-1");
}
function flipDown(id) {
  let secFlip = document.getElementById(id);
  for (let index = 0; index < 90; index++) {
    setTimeout(() => {
      secFlip.style.transform = `rotateX(${index}deg)`;
    }, 200 + index * 10);
  }
}
