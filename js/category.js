// document.addEventListener("DOMContentLoaded", function () {

//   // لعرض ال cover_image في الصفحه التاليه################

//   const urlParams = new URLSearchParams(window.location.search);
//   const categoryName = urlParams.get("category");
//   document.title = categoryName;

//   const imageUrl = localStorage.getItem('coverImage');
//   // console.log(imageUrl)
//   document.getElementById('productImage').style.backgroundImage=`url('${imageUrl}')`;

//   // لعرض ال cover_image في الصفحه التاليه################

// const selectedCategory = localStorage.getItem("selectedCategory");

// fetch(
// `https://youssifallam13.pythonanywhere.com/api/v1/produts/get_products_in_C2/?Category1_name=${selectedCategory}`
//   )
//     .then((response) => response.json())
//     .then((data) => displayCategoryDetails(data.data));

//   function displayCategoryDetails(details) {
//     const container = document.getElementById("Getcategories");
//     container.innerHTML = `
//       <div class="col-xl-4 col-lg-4 col-md-6"
//         <div class="card-box6">
//           <div class="cardImg-box6">
//             <img src="${details.Product_image}" alt="${details.Product_Name}">
//           </div>
//         <div class="cardText-box6 text-center">
//           <a class="  btn btn-Text" href="##">
//             <h4>${details.Product_Name}</h4>
//           </a>
//         </div>
//         </div>
//       </div>
//       `;
//     // هنا نعرض تفاصيل القسم والمنتجات
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // لعرض الـ cover_image في الصفحة التالية
//   const urlParams = new URLSearchParams(window.location.search);
//   const categoryName = urlParams.get("category");
//   document.title = categoryName;

//   const imageUrl = localStorage.getItem('coverImage');
//   document.getElementById('productImage').style.backgroundImage = `url('${imageUrl}')`;

//   document.addEventListener("DOMContentLoaded", function () {
//     const selectedCategory = localStorage.getItem("selectedCategory");

//     // تحقق من أن selectedCategory ليست فارغة
//     if (!selectedCategory) {
//       console.error('Category name is missing.');
//       return; // إنهاء التنفيذ إذا كانت القيمة فارغة
//     }

//     // إنشاء URL مع تضمين selectedCategory كمعامل استعلام
//     const url = `https://youssifallam13.pythonanywhere.com/api/v1/produts/get_products_in_C2/?Category1_name=${encodeURIComponent(selectedCategory)}`;

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok.');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // هنا يمكنك التعامل مع البيانات
//         console.log(data);
//       })

//       if (data && data.data && data.data.Products && data.data.Products.length > 0) {
//                displayCategoryDetails(data.data.Products[0]); // افتراض أن هناك منتج واحد للعرض
//              }

//     });

//   function displayCategoryDetails(Products) {
//     const container = document.getElementById("Getcategories");
//     container.innerHTML = `
//       <div class="col-xl-4 col-lg-4 col-md-6">
//         <div class="card-box6">
//           <div class="cardImg-box6">
//             <img src="${Products.Product_image}" alt="${Products.Product_Name}">
//           </div>
//           <div class="cardText-box6 text-center">
//             <a class="btn btn-Text" href="##">
//               <h4>${Products.Product_Name}</h4>
//             </a>
//           </div>
//         </div>
//       </div>`;
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryName = urlParams.get("category");
  document.title = categoryName;
  // console.log(categoryName)

  const imageUrl = localStorage.getItem("coverImage");
  document.getElementById(
    "productImage"
  ).style.backgroundImage = `url('${imageUrl}')`;

  const selectedCategory = localStorage.getItem("selectedCategory");

  if (!selectedCategory) {
    console.error("Category name is missing.");
    return; // إنهاء التنفيذ إذا كانت القيمة فارغة
  }

  fetch(
    `https://youssifallam13.pythonanywhere.com//api/v1/produts/get_products_in_C2/?Category1_name=${categoryName}`
  )
    .then((response) => {
      if (!response.ok) {
        // تحويل الاستجابة إلى نص ورمي خطأ لمعرفة الرسالة
        return response.text().then((text) => {
          throw new Error("Bad response from server: " + text);
        });
      }
      return response.json();
    })
    //   if (data && data.data && data.data.Categories && data.data.Products) {
    //     const container = document.getElementById("Getcategories");
    //     displayCategoryDetails(data.data.Categories, container),
    //     displayProductsDetails(data.data.Products, container);
    //   } else {
    //     console.error("No products data found");
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error fetching data:", error);
    // });

    // .then((data) => {
    //   if (data && data.data) {
    //     const container = document.getElementById("Getcategories");
    //     if (data.data.Products || data.data.Categories) {
    //       displayProductsDetails(data.data.Products, container),
    //       displayCategoryDetails(data.data.Categories, container);
    //     }
    //     // console.log(data.data.Products)

    //   } else {
    //     console.error("No data found");
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error fetching data:", error);
    // });

    .then((data) => {
      const container = document.getElementById("Getcategories");
      if (data && data.data) {
        if (data.data.Categories) {
          displayDetails(data.data.Categories, container, "Category");
        }
        if (data.data.Products) {
          displayDetails(data.data.Products, container, "Products");
        }
      } else {
        console.error("No data found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  function displayDetails(items, container, type) {
    items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6";
      itemDiv.innerHTML = `
        <a href="##">
        <div class="card-box6">
          <div class="cardImg-box6">
            <img src="${item.Product_image}" alt="${item.Product_Name}">
          </div>
          <div class="cardText-box6 text-center">
            <a class="btn btn-Text" href="##">
              <h4>${item.Product_Name}</h4>
            </a>
          </div>
        </div>
        </a>
        `;

      itemDiv.addEventListener("click", function () {
        let selectedProduct = item;
        if (type === "Category") {
          localStorage.setItem("selectedCategoryDetails", JSON.stringify(items));
          window.location.href = `Sub Category.html?Sub Category=${item.Product_Name}`;
        } else if (type === "Products") {
          localStorage.setItem("selectedProductDetails", JSON.stringify(selectedProduct));
          window.location.href = `finalproduct.html?product=${encodeURIComponent(
            selectedProduct.Product_Name
          )}`;
        }
      });
      container.appendChild(itemDiv);
      console.log(item);
    });
  }
});
