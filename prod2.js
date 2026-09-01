<!DOCTYPE html>

<html lang="ar" dir="rtl">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>المنتجات | أثر</title>

   
    <link rel="stylesheet" href="style3.css">

    <script src="./products.js" defer></script>
    <script src="./prod2.js" defer></script>
    <script src="./main.js" defer></script>
    <script src="./cart.js" defer></script>
    <script src="./divid.js" defer></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">
</head>

<body>

    <!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>اثر</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./style2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">
    <script src="./main.js" defer></script>
</head>

<body>
    <!-- mayar header  -->

    <header>
        <div class="right-bar">
            <a class="logo"><i class="fa-brands fa-pagelines" style="color: rgb(6, 60, 49);"></i>
               جوف
            </a>
        </div>


        <ul class="navbar">
            <li><a href="./home.html" class="home-active">الرئيسية</a></li>
            <li><a href="./products.html">المنتجات</a></li>
           
        </ul>
        <div class="search">
            <input type="text" id="search-box" placeholder="ابحث عن المنتج..." />
            <button id="search-button"><i class="fa-solid fa-magnifying-glass"
                    style="color: rgb(6, 60, 49);"></i></button>
        </div>

        <div class="profile">
            <i class="fa-solid fa-user" style="color: rgb(6, 60, 49);"></i>
            <a href="cart.html">
                <i class="fa-solid fa-cart-shopping " style="color: rgb(6, 60, 49);"></i>
                <span id="cart-count">0</span>
            </a>
            
        </div>


    </header>
    <section class="top-prod">

        <h3>تسوّق حسب الفئة</h3>

        <div class="categories">

            <div class="cloths category-btn" data-category="ملابس">

                <i class="fa-solid fa-vest"></i>

                <p>ملابس</p>

            </div>

            <div class="bags category-btn" data-category="إكسسوارات">

                <i class="fa-solid fa-bag-shopping"></i>

                <p>إكسسوارات</p>

            </div>

            <div class="gifts category-btn" data-category="هدايا">

                <i class="fa-solid fa-gift"></i>

                <p>هدايا</p>

            </div>
            <div class="food category-btn" data-category="أكلاتنا">

                <i class="fa-solid fa-gift"></i>

                <p>أكلاتنا</p>

            </div>

        </div>

        <div id="productsContainer"></div>

    </section>

</body>

</html>
