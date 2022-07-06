let products = [
  {
    createdAt: "2022-06-29T13:57:15.572Z",
    name: "Mr. Ricky Pacocha",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
    thumbnail: "http://loremflickr.com/640/480/fashion",
    price: 84085.12,
    oldPrice: 59525,
    id: "1",
    description:
      " The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool",
  },

  {
    createdAt: "2022-06-29T13:57:15.572Z",
    name: "Mr> Jhon william",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/279.jpg",
    thumbnail: "http://loremflickr.com/640/480/fashion",
    price: 200,
    oldPrice: 100,
    id: "2",
    description:
      " The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool",
  },
];

const html = (product) => {
  return `
<div class="col-12 col-sm-8 col-md-6 col-lg-4 m-3">
          <div class="card">
            <img
              class="card-img"
              src=${product.thumbnail}
              alt="${product.name}"
            />
            <div class="card-img-overlay d-flex justify-content-end">
              <a href="#" class="card-link text-danger like">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <h6 class="card-subtitle mb-2 text-muted">
                Style: ${product.name}
              </h6>
              <p class="card-text">
              ${product.description}
              </p>

              <div
                class="buy d-flex justify-content-between align-items-center"
              >
                <div class="price text-success"><h5 class="mt-4">$${product.price}</h5></div>
                <a href="#" class="btn btn-danger mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
`;
};

products.forEach((product) => {
  const htmlBody = document.getElementById("body");

  htmlBody.innerHTML += html(product);
});
