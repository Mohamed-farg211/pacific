document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loading-screen").style.display = "flex";

  fetch(
    "https://youssifallam13.pythonanywhere.com/api/v1/produts/Main_categoryes/"
  )
    .then((response) => response.json())
    .then((data) => displayMainCategories(data.data.Products));

  document.getElementById("loading-screen").style.display = "none";
document.getElementById("Maincategories").style.display = "flex";

  function displayMainCategories(categories) {
    const container = document.getElementById("Maincategories");
    container.innerHTML = ``;
    categories.forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "col-lg-4 col-md-6 col-sm-6 col-6";
      categoryDiv.innerHTML = `
          
            <div class="card-box2">
              <div class="img-cardbox2">
                <img src="${category.Main_image}" alt="${category.Title}" />
              </div>
              <div class="text-cardbox2">
                <a href="##">
                  <h4>${category.Title}</h4>
                </a>
              </div>
            </div>
          
          `;
      categoryDiv.addEventListener("click", function () {
        // let t_page = document.getElementById("title");
        localStorage.setItem("selectedCategory", category.Title);
        localStorage.setItem("coverImage", category.Cover_image);
        window.location.href = `category.html?category=${category.Title}`;
      });
      container.appendChild(categoryDiv);
    });
  }
});
