const items = [
  {
    photo:
      "https://media.thereformation.com/image/upload/f_auto,q_auto:eco/c_scale,w_auto:breakpoints_100_2560_9_20:1040/v1/prod/product_images/alyssa-high-rise-wide-leg-corduroy-pants/moss/6143c5ea7384371782f577e2/original.jpg",
    name: "Reformation: Alyssa High Rise Corduroy Pants, Size M",
    currentPrice: 47.5,
    description:
      "The Alyssa is fitted in the hip and butt, with a more relaxed-fitting wide leg. It features center front pockets and functional belt loops.",
    size: "M",
    bids: "5",
    views: "8",
  },
  {
    photo:
      "https://media.thereformation.com/image/upload/f_auto,q_auto:eco/c_scale,w_auto:breakpoints_100_2560_9_20:1040/v1/prod/product_images/danny-bodysuit/black/61329bb6e250530142f43eee/original.jpg",
    name: "Danny Bodysuit, Size M",
    currentPrice: 58.5,
    description:
      "The Danny is a fitted bodysuit that features a structured v neckline. It's tight fitting throughout to show off your shape.",
    size: "M",
    bids: 3,
    views: 5,
  },
  {
    photo:
      "https://images.ctfassets.net/p3w8f4svwgcg/7y2VRfdXXQf9rySHPKu0F9/47de8552406c70ff12842d99c2ebf4e6/PMB_1.jpg?w=1400&q=80&fm=webp",
    name: "Priming Moisturizer Balance",
    currentPrice: 14.0,
    description:
      "This moisturizer is lightweight gel-cream moisturizer that balances oil without drying skin or leaving a flat, powdery finish. Pores appear minimized, shine is gone, and skin is hydrated and happy.",
    size: "M",
    bids: 9,
    views: 15,
  },
];

class Item {
  el = document.createElement("tr");
  constructor(item) {
    const img = document.createElement("img");
    img.setAttribute("src", item.photo);
    const tds = Array.from({ length: 6 }, () =>
      this.el.appendChild(document.createElement("td"))
    );
    tds[0].appendChild(img);
    const title = document.createElement("div");
    const name = document.createElement("header");
    name.innerText = item.name;
    title.appendChild(name);
    const size = document.createElement("p");
    size.innerText = `Size ${item.size}`;
    title.appendChild(size);
    tds[1].appendChild(title);
  }
  addToDom() {
    document.getElementById("items");
  }
}

for (const item of items) {
}
