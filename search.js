const searchInput=document.querySelector("search-button");

 searchInput.addEventListener("input",()=>{
const searchValue=searchInput.value.trim();
const result= products.filter(products=>{
    products.name;
   searchInput.includes(searchValue);
})
   displayProducts(result);
 })
 

