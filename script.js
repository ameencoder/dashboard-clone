const container = document.querySelectorAll(".container");
const tab = document.querySelectorAll(".stats--icons img");

// list view
tab[0].addEventListener("click", function () {
  // active tab
  if (tab[1].classList.contains("active-tab")) {
    tab[1].classList.remove("active-tab");
    tab[0].classList.add("active-tab");

    // hide dots
    const dots = container[1].children;
    for (const dot of Object.values(dots)) {
      for (const d of Object.values(dot.children)) {
        for (const el of Object.values(d.children)) {
          if (el.classList.contains("dots")) {
            el.style.visibility = "hidden";
          }
        }
      }
    }

    // update the card
    for (const item of Object.values(container[1].children)) {
      if (item.classList.contains("parent")) {
        item.classList.remove("parent");
        item.classList.add("list-parent");
      }
    }

    // last div of the card
    for (const btn of Object.values(container[1].children)) {
      for (const bt of Object.values(btn.children)) {
        if (bt.classList.contains("bottom-area")) {
          bt.classList.add("list-flex");
        }
      }
    }
  }
});

// grid view
tab[1].addEventListener("click", function () {
  if (tab[0].classList.contains("active-tab")) {
    tab[0].classList.remove("active-tab");
    tab[1].classList.add("active-tab");

    // display dots
    const dots = container[1].children;
    for (const dot of Object.values(dots)) {
      for (const d of Object.values(dot.children)) {
        for (const el of Object.values(d.children)) {
          if (el.classList.contains("dots")) {
            el.style.visibility = "visible";
          }
        }
      }
    }

    // update UI
    for (const item of Object.values(container[1].children)) {
      if (item.classList.contains("list-parent")) {
        item.classList.remove("list-parent");
        item.classList.add("parent");
      }
    }

    // last div of the card
    for (const btn of Object.values(container[1].children)) {
      for (const bt of Object.values(btn.children)) {
        if (bt.classList.contains("bottom-area")) {
          bt.classList.remove("list-flex");
        }
      }
    }
  }
});

// data
const data = [
  {
    name: "Web Designing",
    date: "December 10, 2022",
    type: "Prototyping",
    percentage: 60,
    daysLef: 2,
    // just to solve the undefined.
    parentClass: "c-1",
    progressClass: "progress-c1",
    leftClass: "left-c1",
    rightClass: "right-c1",
  },

  {
    name: "Svg Animations",
    date: "December 10, 2022",
    type: "Prototyping",
    percentage: 40,
    daysLef: 3,
    parentClass: "c-2",
    progressClass: "progress-c2",
    leftClass: "left-c2",
    rightClass: "right-c2",
  },
  {
    name: "Data Analysis",
    date: "December 10, 2022",
    type: "Prototyping",
    percentage: 75,
    daysLef: 1,
    parentClass: "c-3",
    progressClass: "progress-c3",
    leftClass: "left-c3",
    rightClass: "right-c3",
  },
  {
    name: "UI Development",
    date: "December 14, 2022",
    type: "Prototyping",
    percentage: 20,
    daysLef: 4,
    parentClass: "c-4",
    progressClass: "progress-c4",
    leftClass: "left-c4",
    rightClass: "right-c4",
  },
  {
    name: "Adobe Photoshop",
    date: "December 14, 2022",
    type: "Prototyping",
    percentage: 75,
    daysLef: 1,
    parentClass: "c-5",
    progressClass: "progress-c5",
    leftClass: "left-c5",
    rightClass: "right-c5",
  },
  {
    name: "Mobile App Development",
    date: "June 11, 2022",
    type: "Prototyping",
    percentage: 80,
    daysLef: 1,
    parentClass: "c-6",
    progressClass: "progress-c6",
    leftClass: "left-c6",
    rightClass: "right-c6",
  },
  {
    name: "UI/UX Development",
    date: "November 1, 2022",
    type: "Prototyping",
    percentage: 40,
    daysLef: 3,
    parentClass: "c-7",
    progressClass: "progress-c7",
    leftClass: "left-c7",
    rightClass: "right-c7",
  },
  {
    name: "Figma Development",
    date: "October 21, 2022",
    type: "Prototyping",
    percentage: 60,
    daysLef: 2,
    parentClass: "c-8",
    progressClass: "progress-c8",
    leftClass: "left-c8",
    rightClass: "right-c8",
  },
];

const render = function (data) {
  container[1].innerHTML = data
    .map(
      (d) =>
        `<div class="container parent ${d.parentClass}">
  <div class="top-area flex">
    <span>${d.date}</span>
    <div class="dots"><span></span><span></span><span></span></div>
  </div>
  <div class="middle-area">
    <span>${d.name}</span>
    <span>${d.type}</span>
  </div>
  <div class="progress">
    <p>Progress</p>
    <div class="progress-container ${d.progressClass}">
      <div></div>
    </div>
    <div class="percentage-area flex">
      <span></span>
      <span>${d.percentage}%</span>
    </div>
  </div>
  <div class="bottom-area flex">
    <div class="left ${d.leftClass}">
      <img src="./img/man.jpg" alt="man" />
      <img src="./img/women.jpg" alt="women" class="women" />
      <span>&plus;</span>
    </div>
    <div class="right ${d.rightClass}">${d.daysLef} days left</div>
  </div>
  </div>`
    )
    .join(" ");
};

render(data);
