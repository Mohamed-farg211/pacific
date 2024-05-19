
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
