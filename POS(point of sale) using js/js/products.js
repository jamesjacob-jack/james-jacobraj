/*let product = {
    pro11: {
        id: '11',
        name: 'Tomato(1kg)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/tomato.jpg',
        price: '45',
        purchased: '58',
        quantity: 0
    },
    pro12: {
        id: '12',
        name: 'Carrot(1kg)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/caret.jpg',
        price: '25',
        purchased: '50',
        quantity: 0
    },
    pro13: {
        id: '13',
        name: 'Capsicum',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/capsicum.jpg',
        price: '35',
        purchased: '76',
        quantity: 0
    },
    pro14: {
        id: '14',
        name: 'Autumn',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/autumn.jpg',
        price: '28',
        purchased: '74',
        quantity: 0
    },
    pro15: {
        id: '15',
        name: 'Broccoli',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/broccoli.jpg',
        price: '45',
        purchased: '84',
        quantity: 0
    },
    pro16: {
        id: '16',
        name: 'Cabbage',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/cabbage.jpg',
        price: '27',
        purchased: '71',
        quantity: 0
    },
    pro17: {
        id: '17',
        name: 'Cantaloupe',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/cantaloupe.jpg',
        price: '38',
        purchased: '68',
        quantity: 0
    },
    pro18: {
        id: '18',
        name: 'Pumpkin',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/pumpkin.jpg',
        price: '35',
        purchased: '52',
        quantity: 0
    },
    pro19: {
        id: '19',
        name: 'Snake_Gourd',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/snake_gourd.jpg',
        price: '25',
        purchased: '77',
        quantity: 0
    },
    pro110: {
        id: '110',
        name: 'BirkanKai',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/birkankai.jpg',
        price: '25',
        purchased: '66',
        quantity: 0
    },
    pro111: {
        id: '111',
        name: 'Beetroot(1kg)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/beetroot.jpg',
        price: '35',
        purchased: '58',
        quantity: 0
    },
    pro112: {
        id: '112',
        name: 'Onion(1kg)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/onion.jpg',
        price: '45',
        purchased: '60',
        quantity: 0
    },
    pro21: {
        id: '21',
        name: 'Millet Laddu',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/biscate.jpg',
        price: '85',
        purchased: '50',
        quantity: 0
    },
    pro22: {
        id: '22',
        name: 'Porridge_mixes',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/porridge.jpg',
        price: '25',
        purchased: '80',
        quantity: 0
    },
    pro23: {
        id: '23',
        name: 'Rasgulla',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/rasgulla.jpg',
        price: '75',
        purchased: '70',
        quantity: 0
    },
    pro24: {
        id: '24',
        name: 'Dry Fruits',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/dry fruits.webp',
        price: '96',
        purchased: '50',
        quantity: 0
    },
    pro25: {
        id: '25',
        name: 'Fish',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/fishpack.jpg',
        price: '75',
        purchased: '90',
        quantity: 0
    },
    pro26: {
        id: '26',
        name: 'Fish Meat',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/fish_meet.jpg',
        price: '67',
        purchased: '60',
        quantity: 0
    },
    pro27: {
        id: '27',
        name: 'Beef(1kg)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/beaf.jpg',
        price: '180',
        purchased: '50',
        quantity: 0
    },
    pro28: {
        id: '28',
        name: 'Strawberry(1kg)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/perry.webp',
        price: '75',
        purchased: '60',
        quantity: 0
    },
    pro29: {
        id: '29',
        name: 'Orange(1kg)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/orange.jpg',
        price: '75',
        purchased: '90',
        quantity: 0
    },
    pro210: {
        id: '210',
        name: 'Date Fruit',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/date_fruit.jpg',
        price: '55',
        purchased: '55',
        quantity: 0
    },
    pro211: {
        id: '211',
        name: 'Almonds',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/almonds.jpg',
        price: '185',
        purchased: '53',
        quantity: 0
    },
    pro212: {
        id: '212',
        name: 'Pistachio',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/pistachio.avif',
        price: '250',
        purchased: '41',
        quantity: 0
    },
    pro31: {
        id: '31',
        name: 'Fountain-pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/fountain-pen.avif',
        price: '185',
        purchased: '50',
        quantity: 0
    },
    pro32: {
        id: '32',
        name: 'Ballpoint_pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/pallpoint_pen.jpg',
        price: '45',
        purchased: '77',
        quantity: 0
    },
    pro33: {
        id: '33',
        name: 'Metalic_pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/metalic_pen.jpg',
        price: '175',
        purchased: '49',
        quantity: 0
    },
    pro34: {
        id: '34',
        name: 'Royal_pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/royal.jpg',
        price: '96',
        purchased: '68',
        quantity: 0
    },
    pro35: {
        id: '35',
        name: 'Bamboo',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/bamboo.png',
        price: '275',
        purchased: '59',
        quantity: 0
    },
    pro36: {
        id: '36',
        name: 'Metalic(red)',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/metalic.jpg',
        price: '167',
        purchased: '66',
        quantity: 0
    },
    pro37: {
        id: '37',
        name: 'Ink_pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/ink.jpg',
        price: '180',
        purchased: '54',
        quantity: 0
    },
    pro38: {
        id: '38',
        name: 'Vape_pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/vape.png',
        price: '75',
        purchased: '61',
        quantity: 0
    },
    pro39: {
        id: '39',
        name: 'Gell pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/gel.webp',
        price: '75',
        purchased: '63',
        quantity: 0
    },
    pro310: {
        id: '310',
        name: 'Color pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/color.jpg',
        price: '55',
        purchased: '69',
        quantity: 0
    },
    pro311: {
        id: '311',
        name: 'Hero pen',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/hero.jpg',
        price: '185',
        purchased: '67',
        quantity: 0
    },
    pro312: {
        id: '312',
        name: 'Style',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/style.avif',
        price: '250',
        purchased: '57',
        quantity: 0
    },
    pro41: {
        id: '41',
        name: 'Chocolate_Cake',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/chocolate-cake.jpg',
        price: '80',
        purchased: '48',
        quantity: 0
    },
    pro42: {
        id: '42',
        name: 'Red_Velvet_Cake',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/red-cake.jpg',
        price: '45',
        purchased: '60',
        quantity: 0
    },
    pro43: {
        id: '43',
        name: 'Matcha cake',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/matcha-green-tea-cake.webp',
        price: '75',
        purchased: '30',
        quantity: 0
    },
    pro44: {
        id: '44',
        name: 'Blueberry',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/blueberry.jpg',
        price: '96',
        purchased: '40',
        quantity: 0
    },
    pro45: {
        id: '45',
        name: 'Berry',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/blue.jpg',
        price: '25',
        purchased: '80',
        quantity: 0
    },
    pro46: {
        id: '46',
        name: 'Orange',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/orange-cake.jpg',
        price: '67',
        purchased: '55',
        quantity: 0
    },
    pro47: {
        id: '47',
        name: 'Strawberry',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/red-cake2.jpg',
        price: '80',
        purchased: '50',
        quantity: 0
    },
    pro48: {
        id: '48',
        name: 'Black_Forest',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/black-forest.jpg',
        price: '125',
        purchased: '70',
        quantity: 0
    },
    pro49: {
        id: '49',
        name: 'White Cake',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/white-cake.jpg',
        price: '75',
        purchased: '40',
        quantity: 0
    },
    pro410: {
        id: '410',
        name: 'Cup Cake',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/cub-cake.jpg',
        price: '25',
        purchased: '41',
        quantity: 0
    },
    pro411: {
        id: '411',
        name: 'Vennila',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/cup-cake2.jpg',
        price: '85',
        purchased: '60',
        quantity: 0
    },
    pro412: {
        id: '412',
        name: 'Mango',
        image: 'C:/Users/ELCOT/Documents/QANTLER/Day22,Day23/Example/mango.jpg',
        price: '50',
        purchased: '50',
        quantity: 0
    }
};

localStorage.setItem('products', JSON.stringify(product));*/
const productDetailsTable = document.getElementById('product-details-table');
const generateBillBtn = document.getElementById('generate-bill-btn');
const add = document.getElementById('add');

const amount_lable = document.getElementById('amount_lable');


const products = JSON.parse(localStorage.getItem('products'));

let count =0;
for (const productKey in products) {
    
    const productData = products[productKey];
    if (!isNaN(parseInt(product.charAt(0)))) {
        count++;console.log("no image");
    }
}

for (let i = 1; i <= count; i++) {
    const product = products[`pro${Math.ceil(i/12)}${i%12 || 12}`];
    const productImage = document.querySelector(`#product-image${i}`);
    const imagePrice = document.querySelector(`#image${i}-price`);
    if (!product.image) {
      console.error(`Image not found for product ${product.id}`);
    } else {
      productImage.src = product.image;
      console.log("no image");
    }
    imagePrice.textContent = `${product.id} | ${product.name}:Rs.${product.price}`;
    
  }
  const displayProducts = (product1, product2, product3, product4) => {
  const prod = [
    document.getElementById(product1),
    document.getElementById(product2),
    document.getElementById(product3),
    document.getElementById(product4)
  ];

  prod.forEach((product) => {
    if (product.id === product1) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

    let increaseArray = [];

    const addToCart = (productId) => {
        let product = products[productId];
        
        let existingProduct = increaseArray.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            const quantityCell = document.getElementById(`quantity-${existingProduct.id}`);
            if (quantityCell) {
            quantityCell.textContent = existingProduct.quantity;
            }
            const totalCell = document.getElementById(`total-${existingProduct.id}`);
            if (totalCell) {
            totalCell.textContent = `Rs.${existingProduct.quantity * existingProduct.price}`;
            }
            let total = 0;
            increaseArray.forEach((product) => {
               total += product.quantity * product.price;
               
            });
            if(total!=0){
                amount_lable.textContent = `Rs.${total}`;
            }
        } else {
            increaseArray.push(product);
            increaseArray[increaseArray.length - 1].quantity = 1;
        
            const row = document.createElement('tr');
            row.innerHTML = `<td>${increaseArray[increaseArray.length - 1].id}</td><td>${increaseArray[increaseArray.length - 1].name}</td><td id="quantity-${increaseArray[increaseArray.length - 1].id}">1</td><td>Rs.${increaseArray[increaseArray.length - 1].price}</td><td id="total-${increaseArray[increaseArray.length - 1].id}">Rs.${increaseArray[increaseArray.length - 1].price}</td>`;
            productDetailsTable.querySelector('tbody').appendChild(row);
            
            let total = 0;
            increaseArray.forEach((product) => {
               total += 1 * product.price;
            });
            if(total!=0){
                amount_lable.textContent = `Rs.${total}`;
            }
           
        }
    };

    const addToCart2 = (productId, quantity) => {
        let product = products[productId];
        let quant = quantity;
        let existingProduct = increaseArray.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quant;
            existingProduct.total = existingProduct.quantity * existingProduct.price;
            const quantityCell = document.getElementById(`quantity-${existingProduct.id}`);
            if (quantityCell) {
            quantityCell.textContent = existingProduct.quantity;
            }
            const totalCell = document.getElementById(`total-${existingProduct.id}`);
            if (totalCell) {
            totalCell.textContent = `Rs.${existingProduct.quantity * existingProduct.price}`;
            }
            let total = 0;
            increaseArray.forEach((product) => {
               total += product.quantity * product.price;
            });
            if(total!=0){
                amount_lable.textContent = `Rs.${total}`;
            }
        } else {
            product.total = quant* product.price;
            increaseArray.push(product);
            increaseArray[increaseArray.length - 1].quantity = quant;
    
            const row = document.createElement('tr');
            row.innerHTML = `<td>${increaseArray[increaseArray.length - 1].id}</td><td>${increaseArray[increaseArray.length - 1].name}</td><td id="quantity-${increaseArray[increaseArray.length - 1].id}">${increaseArray[increaseArray.length - 1].quantity}</td><td>Rs.${increaseArray[increaseArray.length - 1].price}</td><td id="total-${increaseArray[increaseArray.length - 1].id}">Rs.${product.total}</td>`;
            productDetailsTable.querySelector('tbody').appendChild(row);
            
            let total = 0;
            increaseArray.forEach((product) => {
               total += product.quantity * product.price;
            });
            if(total!=0){
                amount_lable.textContent = `Rs.${total}`;
            }
            
        }
    };

    const overlay = document.getElementById('overlay');
    const body = document.body;

    generateBillBtn.addEventListener('click', () => {
        let total = 0;
    increaseArray.forEach((product) => {
        const existingProduct = products[product.id];
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } 
        else {
            product.quantity = 0;
            products[product.id] = product;
        }
        total += product.quantity * product.price;
    });
    
    localStorage.setItem('products', JSON.stringify(products));
        if(total==0){
             alert("Add products !");
        }
        else{

        document.getElementById("bill").style.display="none";
        document.getElementById("keyboard").style.display="none";
        document.getElementById("generatebill").style.display="block";
        document.getElementById("overlay").style.display = "block";
        let gen_amount_lable=  document.getElementById("gen_amount_lable");
        let gstlable=  document.getElementById("gstlable");
        let payable=  document.getElementById("payable_lable");
        const gst = 20;
        gstlable.textContent = 'Rs.'+gst;
        gen_amount_lable.textContent = amount_lable.textContent;
        payable.textContent = "Rs. " + (gst+total);
        } 
        
    });

    add.addEventListener('click', () => {
       
       const productId = document.getElementById('item_number').value.trim();
       
       const productfull ='pro'+productId;
       const quantity = parseInt(document.getElementById('quantity').value.trim());
       
      if (productId === '') {
        alert('Please enter a product ID.');
       }
      else if(products.hasOwnProperty(productfull)){
        if (isNaN(quantity) || quantity === 0) {
            addToCart2(productfull,1);
           }
           else {
            addToCart2(productfull, quantity); 
        }
       }
       else{
        alert('Product ID not Exists!');
       }  
    });
    