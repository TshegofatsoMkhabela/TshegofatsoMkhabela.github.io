const searchButton = document.querySelector("#search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".nav-list-larger");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

const navLinkIphone = document.querySelector(".nav-link-opacity-iphone");
const navLinkMac = document.querySelector(".nav-link-opacity-mac");
const navLinkIpad = document.querySelector(".nav-link-opacity-ipad");
const iphoneButton = document.querySelector("#iphone");
const iphone = document.querySelector(".nav-link-iphone");
const macButton = document.querySelector("#mac");
const mac = document.querySelector(".nav-link-mac");
const ipadButton = document.querySelector("#ipad");
const ipad = document.querySelector(".nav-link-ipad");

let deviceChoice = "";
let storageChoice = "128GB";
let conditionChoice = "pre-owned";
let budgetChoice = "5000+";

searchButton.addEventListener("click", () => {
  desktopNav.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

window.addEventListener("resize", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

iphoneButton.addEventListener("click", () => {
  iphone.classList.add("black");
  navLinkIphone.classList.add("black");

  mac.classList.remove("black");
  ipad.classList.remove("black");
  navLinkMac.classList.remove("black");
  navLinkIpad.classList.remove("black");

  deviceChoice = "iphone";
});

macButton.addEventListener("click", () => {
  mac.classList.add("black");
  navLinkMac.classList.add("black");

  iphone.classList.remove("black");
  ipad.classList.remove("black");
  navLinkIphone.classList.remove("black");
  navLinkIpad.classList.remove("black");

  deviceChoice = "mac";
});

ipadButton.addEventListener("click", () => {
  ipad.classList.add("black");
  navLinkIpad.classList.add("black");

  mac.classList.remove("black");
  iphone.classList.remove("black");
  navLinkIphone.classList.remove("black");
  navLinkMac.classList.remove("black");

  deviceChoice = "ipad";
});

const storageButton64GB = document.querySelector("#storage-64GB");
const storage64GB = document.querySelector(".storage-64GB");
const storageButton128GB = document.querySelector("#storage-128GB");
const storage128GB = document.querySelector(".storage-128GB");
const storageButton256GB = document.querySelector("#storage-256GB");
const storage256GB = document.querySelector(".storage-256GB");
const storageButton512GB = document.querySelector("#storage-512GB");
const storage512GB = document.querySelector(".storage-512GB");
const storageButton1TB = document.querySelector("#storage-1TB");
const storage1TB = document.querySelector(".storage-1TB");

storageButton64GB.addEventListener("click", () => {
  storage64GB.classList.add("black");

  storage128GB.classList.remove("black");
  storage256GB.classList.remove("black");
  storage512GB.classList.remove("black");
  storage1TB.classList.remove("black");

  storageChoice = "";
});

storageButton128GB.addEventListener("click", () => {
  storage128GB.classList.add("black");

  storage64GB.classList.remove("black");
  storage256GB.classList.remove("black");
  storage512GB.classList.remove("black");
  storage1TB.classList.remove("black");

  storageChoice = "?capacity_product=3858%2C3861%2C3864%2C3867%2C3870";
});
storageButton256GB.addEventListener("click", () => {
  storage256GB.classList.add("black");

  storage64GB.classList.remove("black");
  storage128GB.classList.remove("black");
  storage512GB.classList.remove("black");
  storage1TB.classList.remove("black");

  storageChoice = "?capacity_product=3861%2C3864%2C3867%2C3870";
});
storageButton512GB.addEventListener("click", () => {
  storage512GB.classList.add("black");

  storage64GB.classList.remove("black");
  storage128GB.classList.remove("black");
  storage256GB.classList.remove("black");
  storage1TB.classList.remove("black");

  storageChoice = "?capacity_product=3864%2C3867%2C3870";
});
storageButton1TB.addEventListener("click", () => {
  storage1TB.classList.add("black");

  storage64GB.classList.remove("black");
  storage128GB.classList.remove("black");
  storage256GB.classList.remove("black");
  storage512GB.classList.remove("black");

  storageChoice = "?capacity_product=3867%2C3870";
});

const preownedButton = document.querySelector("#preowned");
const preowned = document.querySelector(".preowned");
const newButton = document.querySelector("#notPreowned");
const notPreowned = document.querySelector(".notPreowned");

preownedButton.addEventListener("click", () => {
  preowned.classList.add("black");

  notPreowned.classList.remove("black");

  conditionChoice = "pre-owned";
});
newButton.addEventListener("click", () => {
  notPreowned.classList.add("black");

  preowned.classList.remove("black");

  conditionChoice = "new";
});

const budgetButton1 = document.querySelector("#budget1");
const budget1 = document.querySelector(".budget1");
const budgetButton2 = document.querySelector("#budget2");
const budget2 = document.querySelector(".budget2");
const budgetButton3 = document.querySelector("#budget3");
const budget3 = document.querySelector(".budget3");
const budgetButton4 = document.querySelector("#budget4");
const budget4 = document.querySelector(".budget4");

budgetButton1.addEventListener("click", () => {
  alert(deviceChoice);
  budget1.classList.add("black");

  budget2.classList.remove("black");
  budget3.classList.remove("black");
  budget4.classList.remove("black");

  conditionChoice = "5000";
});

budgetButton2.addEventListener("click", () => {
  budget2.classList.add("black");

  budget1.classList.remove("black");
  budget3.classList.remove("black");
  budget4.classList.remove("black");

  conditionChoice = "10_000";
});

budgetButton3.addEventListener("click", () => {
  budget3.classList.add("black");

  budget1.classList.remove("black");
  budget2.classList.remove("black");
  budget4.classList.remove("black");

  conditionChoice = "15_000";
});

budgetButton4.addEventListener("click", () => {
  budget4.classList.add("black");

  budget1.classList.remove("black");
  budget2.classList.remove("black");
  budget3.classList.remove("black");

  conditionChoice = "20_000";
});

const link = document.getElementById("reccomendationLink");

document.getElementById("reccomendationLink").addEventListener("click", () => {
  switch (deviceChoice) {
    case "iphone":
      link.href =
        "https://www.istore.co.za/iphone" +
        storageChoice +
        "&product_list_order=price&product_list_dir=asc";
      break;

    case "mac":
      link.href =
        "https://www.istore.co.za/mac/shop-mac-range" +
        storageChoice +
        "&product_list_order=price&product_list_dir=asc";
      break;

    case "ipad":
      link.href =
        "https://www.istore.co.za/ipad/shop-ipad-range" +
        storageChoice +
        "&product_list_order=price&product_list_dir=asc";
      break;
    default:
      alert("Please choose a device.");
      return;
  }
  alert("Just for you. Please wait while we match you.");
});
