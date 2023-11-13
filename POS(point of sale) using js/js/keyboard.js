const clear = document.getElementById('clear');
const ac= document.getElementById('ac');
const item = document.getElementById('item_number');
const quantity = document.getElementById('quantity');

const numberButtons = document.querySelectorAll('.number_btn');

let activeInput = item;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      const numberValue = Number(button.textContent);

      if (!isNaN(numberValue)) {
        activeInput.value += numberValue;
      }
    });
  });
  clear.addEventListener('click', () => {
    const currentValue = activeInput.value;

    if (currentValue.length > 0) {
      activeInput.value = currentValue.substring(0, currentValue.length - 1);
    }
  });
  ac.addEventListener('click', () => {
    item.value = '';
    quantity.value = '';
  });
  item.addEventListener('focus', () => {
    activeInput = item;
  });

  quantity.addEventListener('focus', () => {
    activeInput = quantity;
  });