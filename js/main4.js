document.addEventListener("DOMContentLoaded", function () {
  
  let productDetails = JSON.parse(
    localStorage.getItem("selectedProductDetails")
  );
  if (!productDetails) {
    console.error("لا يوجد تفاصيل منتج في التخزين المحلي.");
    return; 
  }


  displayProductDetails(productDetails);

  
  document.title = productDetails.Product_Name; 

  
  const imageUrl = localStorage.getItem("coverImage");
  if (imageUrl) {
    document.getElementById(
      "productImage"
    ).style.backgroundImage = `url('${imageUrl}')`;
  }

  function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById("FinalProducts");
    let card = "";

    if (!product.Product_Name) {
      console.error("اسم المنتج مفقود في تفاصيل المنتج.");
      return; // إنهاء الوظيفة إذا كان اسم المنتج مفقودًا
    }

    
    card += `
      <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12">
        <div class="card-left">
          <h2>${product.Product_Name}</h2>

          <h4 class="btn btn-Text">Benefits</h4>
          <span>Product of Egypt</span>
          <ul class="listproduct">
            ${
              product.Benefits && Array.isArray(product.Benefits)
                ? product.Benefits.map((benefit) => `<li>${benefit}</li>`).join(
                    ""
                  )
                : ""
            }
          </ul>

          <h4 class="btn btn-Text">Weights</h4>
          <ul class="dataproduct">
            ${
              product.Weights && Array.isArray(product.Weights)
                ? product.Weights.map((weights) => `<li>${weights}</li>`).join(
                    ""
                  )
                : ""
            }
          </ul>

          <h4 class="btn btn-Text">Grinding_Types </h4>
          <ul class="dataproduct Weightproduct">
            ${
              product.Grinding_Types && Array.isArray(product.Grinding_Types)
                ? product.Grinding_Types.map(
                    (grinding_Types) => `<li>${grinding_Types}</li>`
                  ).join("")
                : ""
            }
          </ul>
        </div>
      </div>

      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="card-center">
          <div class="card-imgcenter">
            <img src="${product.Product_image}" alt="">
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12">
        <div class="card-right">
          <ul class="list-group">
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
          </ul>

          <div class="contect-us">
            <h3>contact us </h3>
            <a class="btn btn-Text" href="##">
              <h4>send</h4>
            </a>
          </div>
        </div>
      </div>
    `;

    productDetailsContainer.innerHTML = card;
  }
});
