const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // biar klik button nggak toggle card
    alert("Lagi Maintance cuy");
  });
});

document.querySelectorAll(".galeri-card").forEach((card) => {
  const imgs = card.querySelectorAll(".galeri-img");

  card.addEventListener("click", () => {
    card.classList.toggle("aktif");

    if (card.classList.contains("aktif")) {
      // sejajar
      imgs[0].style.left = "0.5rem";
      imgs[0].style.top = "0";
      imgs[0].style.zIndex = "10";

      imgs[1].style.left = "4rem";
      imgs[1].style.top = "0";
      imgs[1].style.zIndex = "20";

      imgs[2].style.left = "6rem";
      imgs[2].style.top = "0";
      imgs[2].style.zIndex = "30";
    } else {
      // stack
      imgs[0].style.left = "1.5rem";
      imgs[0].style.top = "1rem";
      imgs[0].style.zIndex = "30";

      imgs[1].style.left = "2rem";
      imgs[1].style.top = "0";
      imgs[1].style.zIndex = "20";

      imgs[2].style.left = "4rem";
      imgs[2].style.top = "2rem";
      imgs[2].style.zIndex = "10";
    }
  });
});
const menubtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("max-h-0");
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("max-h-screen");
  menu.classList.toggle("opacity-100");
});
