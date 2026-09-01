const searchInput=document.querySelector("search-button");

 searchInput.addEventListener("input",()=>{
const searchValue=searchInput.value.trim();
const result= products.filter(products=>{
    products.name;
    .includes(searchValue);
})
   displayProducts(result);
 })

