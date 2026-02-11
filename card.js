// const buttons = document.querySelectorAll("button");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation(); // biar klik button nggak toggle card
//     alert("Lagi Maintance cuy");
//   });
// });

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
// ========== MENU DROPDOWN (INDEX) ==========
const dropdownBtn = document.getElementById("menu-btn");
const dropdownMenu = document.getElementById("mobile-menu");

if (dropdownBtn && dropdownMenu) {
  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("max-h-0");
    dropdownMenu.classList.toggle("opacity-0");
    dropdownMenu.classList.toggle("max-h-screen");
    dropdownMenu.classList.toggle("opacity-100");
  });
}

const sidebarBtn = document.getElementById("sidebar-btn");
const sidebarMenu = document.getElementById("sidebar-menu");

if (sidebarBtn && sidebarMenu) {
  sidebarBtn.addEventListener("click", () => {
    const isOpen = sidebarMenu.classList.contains("translate-x-0");

    if (isOpen) {
      sidebarMenu.classList.remove("translate-x-0");
      sidebarMenu.classList.add("translate-x-full");
    } else {
      sidebarMenu.classList.remove("translate-x-full");
      sidebarMenu.classList.add("translate-x-0");
    }
  });
}

const anggotalainnya = document.getElementById("anggota_lainnya");
if (anggotalainnya) {
  anggotalainnya.addEventListener("click", () => {
    window.location.href = "anggota.html";
  });
}
