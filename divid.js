const searchInput = document.querySelector("#search-box");
searchInput.addEventListener("input",
     () => {
          const searchValue = searchInput.value.trim().toLowerCase();
          const results = products.filter(product => product.name.toLowerCase().includes(searchValue)); displayProducts(results);
     });
const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach(button => {
     button.addEventListener("click",
          () => {
               const category = button.dataset.category;
               if (category === "الكل") {
                    displayProducts(products);

               } else {
                    const results = products.filter(product => product.category === category);
                    displayProducts(results);
               }
          });
});
