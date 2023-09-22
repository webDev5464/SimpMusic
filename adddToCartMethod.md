# Product Add to Cart Method

```html
    <body>
      <h1>Shopping Cart</h1>

      <!-- Product List -->
      <div class="product">
          <h2>Product 1</h2>
          <p>Price: $10.00</p>
          <button onclick="addToCart('Product 1', 10.00)">Add to Cart</button>
      </div>

      <div class="product">
          <h2>Product 2</h2>
          <p>Price: $20.00</p>
          <button onclick="addToCart('Product 2', 20.00)">Add to Cart</button>
      </div>

      <!-- Shopping Cart -->
      <h2>Shopping Cart</h2>
      <ul id="cart">
          <!-- Cart items will be displayed here -->
      </ul>

      <!-- Total -->
      <h3>Total: $<span id="total">0.00</span></h3>

        <script>
            // Initialize the shopping cart as an empty array
            let cart = [];
            let total = 0;

            // Function to add items to the cart
            function addToCart(productName, price) {
                cart.push({ name: productName, price: price });
                total += price;

                // Update the cart display
                updateCartDisplay();
            }

            // Function to update the cart display
            function updateCartDisplay() {
                const cartList = document.getElementById('cart');
                const totalSpan = document.getElementById('total');
                cartList.innerHTML = '';

                // Iterate through the cart items and display them
                cart.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                    cartList.appendChild(listItem);
                });

                // Update the total
                totalSpan.textContent = total.toFixed(2);
            }
        </script>
    </body>
```