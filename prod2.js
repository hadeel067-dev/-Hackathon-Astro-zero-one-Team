const productsContainer =
    document.getElementById("productsContainer");

function displayProducts(productsToDisplay) {

    productsContainer.innerHTML = "";

    productsToDisplay.forEach(product => {

      
        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.Image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <strong>$${product.price}</strong>

            <button class="add-to-card">
                أضف إلى السلة
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        `;

        
        productsContainer.appendChild(card);

       
        const addButton = card.querySelector(".add-to-card");

        addButton.onclick = function () {

           
            let cart =
                JSON.parse(localStorage.getItem("cart")) || [];

           
            let existingProduct =
                cart.find(item => item.id === product.id);

            if (existingProduct) {

               
                existingProduct.quantity += 1;

            } else {

                
                cart.push({
                    ...product,
                    quantity: 1
                });
            }

            
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

           
            updateCartCount();
        };
    });
}
