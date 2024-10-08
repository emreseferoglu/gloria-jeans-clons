// Ana Sayfadaki Tüm Ürünler Kısmını Objeden çekme
const AllProducts = [
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b21da833-09fa-4215-8dc3-9e4b8c1798c5/2560/nicaragua-san-jose-250gr-3.webp",
    productName: "Gloria Jean'S Nikaragua 250gr",
    productPrice: "₺395.00",
  },
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/c92967da-e5e7-4512-8179-a86c1d8d06a8/540/ethiopia-yirgacheffe-250gr-3.webp",
    productName: "Gloria Jean'S Ethiopia Yirgacheffe 250gr",
    productPrice: "₺395.00",
  },
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b351a0f2-1d7f-436c-8fdf-c724a24ef310/540/columbia-la-manuela-250gr-3.webp",
    productName: "Gloria Jean'S Colombia La Manuela 250gr",
    productPrice: "₺395.00",
  },
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/28b482db-aa61-4d48-a320-2f270489155b/1080/brazil-soracabana-250gr-3.webp",
    productName: "Gloria Jean'S Brazilya Soracabana 250gr",
    productPrice: "₺395.00",
  },
];
// Sepete eklenen verileri getir
function getLocalData() {
  const cart = document.getElementById("cartRowOne");
  const storedData = JSON.parse(localStorage.getItem("cartItems")) || [];
  const rowHtml = document.getElementById("cartProductRows");
  const dataLength = storedData.length;
  const dataCount = document.getElementById("productLength");

  if (dataLength > 0) {
    cart.classList.add("cartHide");
    document.getElementById("clearCart").style.display = "block";
    storedData.forEach((data) => {
      rowHtml.innerHTML += `
        <div class="row mb-4">
          <div class="col-lg-4 col-sm-4"><img class="img-fluid h-100 cardImage" src="${data.picture}"></div>
          <div class="col-lg-8 col-sm-8">
            <p class="card-text">${data.name}</p>
            <div>
               <p class="cardPrice">Fiyat: ${data.price}</p>
            </div>
            <div>
              <h6>Ürün Adedi:  ${data.quantity}</h6>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    cart.classList.remove("cartHide");
    document.getElementById("clearCart").style.display = "none";
    document.getElementById("closeBtnTwo").classList.add("closeBtnTwo");
  }
}


const allProductsRow = document.getElementById("allProducts");
let ProductRendered = false;
function allProductRendered() {
  if (ProductRendered) {
    allProductsRow.innerHTML = "";
    ProductRendered = false;
  } else {
    AllProducts.forEach((product) => {
      allProductsRow.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card">
              <img
                src="${product.productPicture}"
                class="card-img-top"
              />
           
              <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.productPrice}</p>
              </div>
            </div>
          </div>`;
    });
  }
}

// Son Gezdigin Ürünler
const ViewedProductsObject = [
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/cc207cc2-724e-47df-a089-7d6b005ec51c/2560/gj-tk-1.webp",
    productName: "Gloria Jean's Türk Kahvesi 500gr",
    productPrice: "₺350.00",
  },
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/28b482db-aa61-4d48-a320-2f270489155b/2560/brazil-soracabana-250gr-3.webp",
    productName: "Gloria Jean's Brazilya  Soracabana 250gr",
    productPrice: "395.00",
  },
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b21da833-09fa-4215-8dc3-9e4b8c1798c5/540/nicaragua-san-jose-250gr-3.webp",
    productName: "Gloria Jean's Nikaragua 250gr",
    productPrice: "395.00",
  },
  {
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/1b0c4eb2-dd90-4962-972e-3ff0ca127041/540/gjeb-1.webp",
    productName: "Gloria Jean's Glorious Blend 1000gr",
    productPrice: "1300.00",
  },
];

const ViewedProductsRow = document.getElementById("ViewedProductsRow");
let ViewedProductsRendered = false;

function ViewedProductsShow() {
  if (ViewedProductsRendered) {
    ViewedProductsRow.innerHTML = "";
    ViewedProductsRendered = false;
  } else {
    ViewedProductsObject.forEach((products) => {
      ViewedProductsRow.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card">
              <img
                src="${products.productPicture}"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">${products.productName}</h5>
                <p class="card-text">${products.productPrice}</p>
              </div>
            </div>
          </div>
      `;
    });
  }
}

// Mobile Sidebar sublink
function sidebarSublinkShow() {
  document
    .getElementById("sidebarCoffeeLink")
    .addEventListener("click", function (e) {
      e.preventDefault();

    });

 
}

function YourCartShow() {
  const sidebar = document.getElementById("yourCartSepet");
  const cartIcon = document.getElementById("cartİcon");
  const sidebarBtn = document.getElementById("closeBtnTwo");
  const sidebarBtnTwo = document.getElementById("closeBtn");

  cartIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.add("cartSepetShow");
  });

  sidebarBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.remove("cartSepetShow");
  });

  sidebarBtnTwo.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.remove("cartSepetShow");
  });

  document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !cartIcon.contains(event.target)) {
      sidebar.classList.remove("cartSepetShow");
    }
  });
  sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  allProductRendered();
  ViewedProductsShow();
  sidebarSublinkShow();
  YourCartShow();
  getLocalData();
});
