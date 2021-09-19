const items = [
  {
    photo:
      "https://media.thereformation.com/image/upload/f_auto,q_auto:eco/c_scale,w_auto:breakpoints_100_2560_9_20:1040/v1/prod/product_images/alyssa-high-rise-wide-leg-corduroy-pants/moss/6143c5ea7384371782f577e2/original.jpg",
    name: "Reformation: Alyssa High Rise Corduroy Pants",
    currentPrice: "$47.50",
    maxBid: "$55.00",
    description:
      "The Alyssa is fitted in the hip and butt, with a more relaxed-fitting wide leg. It features center front pockets and functional belt loops.",
    size: "M",
    time: "6d 12hrs",
  },
  {
    photo:
      "https://media.thereformation.com/image/upload/f_auto,q_auto:eco/c_scale,w_auto:breakpoints_100_2560_9_20:1040/v1/prod/product_images/danny-bodysuit/black/61329bb6e250530142f43eee/original.jpg",
    name: "Danny Bodysuit",
    currentPrice: "$58.50",
    maxBid: "$75.00",
    description:
      "The Danny is a fitted bodysuit that features a structured v neckline. It's tight fitting throughout to show off your shape.",
    size: "M",
    time: "2d 6hrs",
  },
  {
    photo:
      "https://images.ctfassets.net/p3w8f4svwgcg/7y2VRfdXXQf9rySHPKu0F9/47de8552406c70ff12842d99c2ebf4e6/PMB_1.jpg?w=1400&q=80&fm=webp",
    name: "Priming Moisturizer Balance",
    currentPrice: "$14.00",
    maxBid: "$20.00",
    description:
      "This moisturizer is lightweight gel-cream moisturizer that balances oil without drying skin or leaving a flat, powdery finish. Pores appear minimized, shine is gone, and skin is hydrated and happy.",
    size: "1.7 fl oz / 50ml",
    time: "7d 21hrs",
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
    const currentPrice = document.createElement("p");
    currentPrice.innerText = item.currentPrice;
    tds[2].appendChild(currentPrice);
    const maxBid = document.createElement("p");
    maxBid.innerText = item.maxBid;
    tds[3].appendChild(maxBid);
    const description = document.createElement("p");
    description.innerText = item.description;
    tds[4].appendChild(description);
    const time = document.createElement("p");
    time.innerText = item.time;
    tds[5].appendChild(time);
  }
  addToDom() {
    document.getElementById("items").appendChild(this.el);
  }
}

for (const item of items) {
  new Item(item).addToDom();
}

// New Listing

const modal = document.querySelector(".modal");
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
function showModal() {
  modal.style.display = "flex";
}
function closeModal() {
  modal.style.display = "none";
}

const upload = document.querySelector("input.photo");
upload.addEventListener("change", () => {
  const [file] = upload.files;
  if (file) {
    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
    document.querySelector(".modal .upload-area").style.display = "none";
  }
});

const form = document.getElementById("list-item");
form.addEventListener("submit", () => {
  const data = new FormData(form);
  fetch("/createItem", {
    method: "post",
    body: {
      userId: null,
      name: data.get("title"),
      description: data.get("description"),
      endDate: Date.now() + 1000 * 60 * 60 * 24 * 30,
      startBid: 1,
    },
  }).then(() => {
    closeModal();
  });
});
