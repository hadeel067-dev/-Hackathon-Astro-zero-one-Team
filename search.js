const searchInput = document.querySelector("#search-box");

if (searchInput) {

   searchInput.addEventListener("input", () => {

      const searchValue =
         searchInput.value.trim();

      const results = products.filter(product =>
         product.name.includes(searchValue)
      );

      displayProducts(results);
   });
}