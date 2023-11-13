const scroll = document.querySelector('.scroll');
const buttonContainer = document.querySelector('.button-container');
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const scrollAmount = 180; 
let currentPosition = 0;
function moveUp() {
  currentPosition += scrollAmount;
  if (currentPosition > 0) {
    currentPosition = 0;
  }
  buttonContainer.style.transform = `translateY(${currentPosition}px)`;
}
function moveDown() {
  currentPosition -= scrollAmount;
  const scrollableHeight = buttonContainer.clientHeight - scroll.clientHeight;
  if (currentPosition < -scrollableHeight) {
    currentPosition = -scrollableHeight;
  }
  buttonContainer.style.transform = `translateY(${currentPosition}px)`;
}
upButton.addEventListener('click', () => {
  moveUp();
});
downButton.addEventListener('click', () => {
  moveDown();
});
