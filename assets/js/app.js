const menu = document.querySelector(".navbar");
const openMenu = document.querySelector(".nav-open");
const closeMenu = document.querySelector(".nav-close");
const asset = document.querySelector(".asset");
const assetBtnLg = document.querySelector(".asset-btn-lg");
const assetBtn = document.querySelector(".asset-btn");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
asset.addEventListener("click", swap);

function show() {
    menu.style.display = "block";
    menu.style.left = "0";

    closeMenu.style.display = "block"
};

function close() {
    menu.style.left = "-1000px"
    closeMenu.style.display = "none"
};

function swap() {
    asset.classList.add("new-bg");

    assetBtn.style.display = "none";
    assetBtnLg.style.display = "block"

    const para = document.querySelector(".p2");
    para.style.color = "#fff";
}





