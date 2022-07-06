//  data fetch
//  wait
//
const apiUrl = "https://62bd8db5c5ad14c110c16cc2.mockapi.io/product";

var loadingComponent = `
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

var component = (product) => `
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 ">
          <div class="card mx-4">
            <img
              class="card-img"
              src=${product.thumbnail}
              alt=${product.name}
            />
           
            <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <h6 class="card-subtitle mb-2 text-muted">Style: ${product.name}</h6>
              <p class="card-text">
               ${product.description}
              </p>

              <div
                class="buy d-flex justify-content-between align-items-center"
              >
                <div class="price text-success"><h5 class="mt-4">$125</h5></div>
                <a href="#" class="btn btn-danger mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
`;

const fetchResource = async () => {
  const res = await fetch(apiUrl);
  var product = await res.json();

  return product;
};
const buildHtmlBody = async () => {
  const body = document.getElementById("body");
  body.innerHTML = loadingComponent;
  const data = await fetchResource();
  body.innerHTML = "";
  for (let i = 0; i <= data.length; i++) {
    body.innerHTML += component(data[i]);
  }
};

buildHtmlBody();
