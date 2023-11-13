const products = JSON.parse(localStorage.getItem('products'));
      const productTableBody = document.getElementById('productTableBody');

      for (const productKey in products) {
        const productData = products[productKey];
        if (isNaN(parseInt(productKey.charAt(0)))) {
          continue; 
        }
        const tableRow = document.createElement('tr');

        const productIdCell = document.createElement('td');
        productIdCell.textContent = productData.id;
        tableRow.appendChild(productIdCell);

        const productNameCell = document.createElement('td');
        productNameCell.textContent = productData.name;
        tableRow.appendChild(productNameCell);

        

        const productPriceCell = document.createElement('td');
        productPriceCell.textContent = 'Rs.'+productData.price;
        tableRow.appendChild(productPriceCell);

        const productPurchasedCell = document.createElement('td');
        productPurchasedCell.textContent = productData.purchased;
        tableRow.appendChild(productPurchasedCell);

        const productQuantityCell = document.createElement('td');
        productQuantityCell.textContent = productData.quantity;
        tableRow.appendChild(productQuantityCell);

        const productsoleCell = document.createElement('td');
        productsoleCell.textContent = productData.purchased-productData.quantity;
        tableRow.appendChild(productsoleCell);
        productTableBody.appendChild(tableRow);
      }