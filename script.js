const nav = document.querySelector(".navigation");
const menu = document.querySelector(".menu_div");
const menuList = document.querySelector(".menu_list");
const menuListDiv = document.querySelector(".menu_list_items");
const postCodeDiv = document.querySelector(".post_code_div");
const toggles = document.querySelectorAll(".toggle");
const subMenu = document.querySelector(".sub_menu_container");

const postCodes = [
  "SA99 1DU",
  "W1A 1AA",
  "SW1A 1AA",
  "WC2N 5DU",
  "LE87 2BB",
  "SL6 3QQ",
  "BD1 1AH",
  "WC2H 9JQ",
  "EC1V 2NX",
  "PO16 7GZ",
  "B61 7HA",
  "BA3 4YF",
  "KY11 8ST",
  "DY13 0NW",
  "L20 7YW",
  "WS13 8UR",
  "SR43 2SB",
  "SA99 1BT",
  "UB7 0LB",
  "SW1A 2AA",
  "PR3 1XB",
  "BT2 8HQ",
  "G51 1DA",
  "B15 2TE",
  "EH3 1GE",
  "SW1W 0NY",
  "M9 5SD",
  "M19 3AD",
  "PR25 9FR",
  "SA99 1YW",
  "AL10 9WN",
  "SW1A 0AA",
  "CV3 9SD",
  "IG11 7RN",
  "W1A 6US",
  "SR5 9QY",
  "N1 7GU",
  "NN18 8UA",
  "NE12 8NW",
  "DL98 1AT",
  "BT1 9WY",
  "DA15 0BQ",
  "EC1A 1AA",
  "M5 4WT",
  "SO14 0AG",
  "PE32 1TE",
  "HD8 1DY",
  "WV98 2AD",
  "DL1 9AG",
  "CV4 7ES",
  "CV21 9FU ",
  "BT1 9PT",
  "N15 6RS",
  "BS9 0DP",
  "M1 1AG",
  "BN21 9AT",
  "E1 6AN",
  "E1 6JJ",
  "BR1 3BX",
  "WV14 4BZ",
  "PR3 1NJ",
  "CV4 7AL",
  "SY5 8NF",
  "BH16 6FA",
  "WA7 9DY",
  "NE38 9EX",
  "M4 6GA",
  "FY8 5DX",
  "NG20 8RY",
  "DE1 0NQ",
  "BN1 6WH",
  "SK14 4TU",
  "WC1X 0HD",
  "SN38 1NW ",
  "E17 9RD",
  "WA5 9QG",
  "NP11 4RB",
  "IV11 8YS",
  "CV34 4LL",
  "SA6 7JL",
  "EH54 0HH",
  "SA99 1AB",
  "ST4 5BW",
  "BN3 8EZ",
  "EX2 7JH",
  "SA99 1ZW",
  "BN99 6RB",
  "EC1A 1BB",
  "M14 4TY",
  "LE87 2GA",
  "CF10 4GA",
  "LE4 6JL",
  "S60 1AA",
  "BH16 6FH",
  "NE98 1ZZ",
  "M21 9NP",
  "DE12 6RE",
  "NW8 0EG",
  "SA99 1BN",
  "SA99 1AF",
];

menu.addEventListener("click", () => {
  menuList.classList.toggle("show_menu");
});

const subMenuUI = (link1, link2, link3) => {
  return `
          <div class="menu_list_items back_btn">
               <p>Back</p>
          </div>
          <a href="#" class="menu_list_items">${link1}</a>
          <a href="#" class="menu_list_items">${link2}</a>
          <a href="#" class="menu_list_items">${link3}</a>`;
};

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    subMenu.classList.toggle("toggle");
    menuList.classList.toggle("show_menu");

    if (toggle.classList.contains("help_menu_toggle")) {
      subMenu.style.left = "60px";
      subMenu.innerHTML = subMenuUI(
        "Help and Information",
        "About this Website",
        "Privacy Policy"
      );
    } else if (toggle.classList.contains("pl_menu_toggle")) {
      subMenu.style.left = "265px";
      subMenu.innerHTML = subMenuUI(
        "Postcode Lists",
        "By County",
        "By Introduction Date"
      );
    } else {
      subMenu.style.left = "430px";
      subMenu.innerHTML = subMenuUI(
        "Postcode Maps",
        "User Type",
        "Use Category",
        "Council Tax Band"
      );
    }
  });
});

subMenu.addEventListener("click", (e) => {
     if (e.target.classList.contains("back_btn")) {
          subMenu.classList.toggle("toggle");
          menuList.classList.toggle("show_menu");
     }
});

const updateUI = (item) => {
  return (postCodeDiv.innerHTML += `<p class="post_codes">${item}</p>`);
};

postCodes.map((postcode) => {
  updateUI(postcode);
});