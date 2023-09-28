const nav = document.querySelector(".navigation");
const menu = document.querySelector(".menu_div");
const menuList = document.querySelector(".menu_list");
const menuListDiv = document.querySelector(".menu_list_items");
const toggles = document.querySelectorAll(".toggle");
const subMenu = document.querySelector(".sub_menu_container");

menu.addEventListener("click", () => {
  menuList.classList.toggle("show_menu");
});

const subMenuUI = (link1, link2, link3) => {
  return `
          <div class="menu_list_items back_btn">
               Back
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
      subMenu.style.left = "690px";
      let xl = window.matchMedia("(min-width: 1280px)");
      xl.matches ? subMenu.style.left = "853px" : "";
      subMenu.innerHTML = subMenuUI(
        "Help and Information",
        "About this Website",
        "Privacy Policy"
      );
    } else if (toggle.classList.contains("pl_menu_toggle")) {
      subMenu.style.left = "230px";
      let xl = window.matchMedia("(min-width: 1280px)");
      xl.matches ? subMenu.style.left = "283px" : "";
      subMenu.innerHTML = subMenuUI(
        "Postcode Lists",
        "By County",
        "By Introduction Date"
      );
    } else {
      subMenu.style.left = "343px";
      let xl = window.matchMedia("(min-width: 1280px)");
      xl.matches ? subMenu.style.left = "423px" : "";
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