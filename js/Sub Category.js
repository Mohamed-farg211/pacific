document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryName = urlParams.get("Sub Category");
  console.log(categoryName);
  document.title = categoryName;

  const imageUrl = localStorage.getItem("coverImage");
  document.getElementById(
    "productImage"
  ).style.backgroundImage = `url('${imageUrl}')`;

  const selectedCategory = localStorage.getItem("selectedCategoryDetails");
  if (!selectedCategory) {
    console.error("Category name is missing.");
    return; // إنهاء التنفيذ إذا كانت القيمة فارغة
  }

  fetch(
    `https://youssifallam13.pythonanywhere.com//api/v1/produts/get_products_in_C3/?Category2_name=${categoryName}`
  )
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error("Bad response from server: " + text);
        });
      }
      return response.json();
    })
    .then((data) => {
      const container = document.getElementById("Getcategories");
      if (data && data.data) {
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

  function displayDetails(items, container) {
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
        localStorage.setItem("selectedProductDetails", JSON.stringify(item));
        window.location.href = `finalproduct.html?product=${encodeURIComponent(
          item.Product_Name
        )}`;
      });
      container.appendChild(itemDiv);
      // console.log(item)
    });
  }
});
