const categoryButtons =

    document.querySelectorAll(".category-btn");


categoryButtons.forEach(button => {


    button.addEventListener("click", () => {


        const category =

            button.dataset.category;


        if (category === "الكل") {


            displayProducts(products);


        } else {


            const results = products.filter(

                product => product.category === category

            );


            displayProducts(results);

        }

    });

});