const root = document.getElementById("root");
const btnContainer = document.querySelector(".topnav");

const allArrays = [
  {
    id: 1,
    img: "img/pexel1.jpg",
    title: "Vegetables",
    price: "$15.23",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Breakfast",
  },

  {
    id: 2,
    img: "img/pexel4.jpg",
    title: "Snacks",
    price: "$28.23",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Breakfast",
  },
  {
    id: 3,
    img: "img/pexel6.jpg",
    title: "Plantain",
    price: "$10.23",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Breakfast",
  },
  {
    id: 4,
    img: "img/pexel12.jpg",
    title: "Bread",
    price: "$12.80",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Breakfast",
  },
  {
    id: 5,
    img: "img/pexel2.jpg",
    title: "Pizza",
    price: "$25.2",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Lunch",
  },
  {
    id: 6,
    img: "img/pexel12.jpg",
    title: "Bread",
    price: "$12.80",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Lunch",
  },
  {
    id: 7,
    img: "img/pexel10.jpg",
    title: "Burger",
    price: "$22.39",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Lunch",
  },
  {
    id: 8,
    img: "img/pexel8.jpg",
    title: "Waffle",
    price: "$10.89",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Lunch",
  },

  {
    id: 9,
    img: "img/pexel9.jpg",
    title: "Creaming",
    price: "$11.20",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "shakes",
  },
  {
    id: 10,
    img: "img/pexel5.jpg",
    title: "Berry",
    price: "$9.23",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "shakes",
  },

  {
    id: 11,
    img: "img/pexel11.jpg",
    title: "Mega",
    price: "$11.75",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "shakes",
  },

  {
    id: 12,
    img: "img/pexel13.jpg",
    title: "Shakes",
    price: "$15.23",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "shakes",
  },
  {
    id: 13,
    img: "img/pexel6.jpg",
    title: "Plantain",
    price: "$10.23",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Dinner",
  },
  {
    id: 14,
    img: "img/pexel10.jpg",
    title: "Burger",
    price: "$22.39",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Dinner",
  },
  {
    id: 15,
    img: "img/pexel8.jpg",
    title: "Waffle",
    price: "$10.89",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Dinner",
  },
  {
    id: 16,
    img: "img/pexel7.jpg",
    title: "Rice",
    price: "$27.44",
    description:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Dinner",
  },

  {
    id: 17,
    img: "img/pexel3.jpg",
    title: "Spaghetti",
    price: "$12.26",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    category: "Dinner",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  displayAllArray(allArrays);
  displayButtons();
});

const displayButtons = () => {
  const displayBtn = allArrays.reduce(
    (values, items) => {
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },

    ["All"]
  );

  const orderBtn = displayBtn
    .map((category) => {
      return `<button class="btn" id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = orderBtn;
  const btnEl = document.querySelectorAll(".btn");
  btnEl.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.id;

      const displayFilter = allArrays.filter((values) => {
        switch (values.category) {
          case category:
            return values;
            break;
          default:
            break;
        }
      });
      switch (category) {
        case "All":
          return displayAllArray(allArrays);
          break;
        default:
          return displayAllArray(displayFilter);
          break;
      }
    });
  });

  btnEl.forEach((btn) => {
    if (btn.id === "All") {
      btn.classList.add("design");
    }
    btn.addEventListener("click", () => {
      document.querySelector(".design")?.classList.remove("design");
      btn.classList.add("design");
    });
  });
};

const displayAllArray = (allArrayMap) => {
  let displayAll = allArrayMap
    .map((items) => {
      let { img, title, price, description } = items;
      return `
<div class="column top row">
<div class="image column">
 <img src=${img} alt="" />
</div>
<div class="column ending-space">
 <div class="row title-head">
   <span class="column title">${title}</span>
   <span class="column price">${price}</span>
   <hr />
 </div>

 <p class="description">${description}</p>
</div>
</div>
`;
    })
    .join("");
  root.innerHTML = displayAll;
};
// const footerData = document.querySelector(".footer");
// const date = new Date().getFullYear();
// const showDate = `<p>paulakhere48@gmail.com ${date}</p>`;
// footerData.innerHTML = showDate;
