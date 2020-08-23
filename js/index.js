"use strict";

const navIcon = document.querySelector(".nav-icon");
const mFooterEl = document.querySelector(".m-footer");

mFooterEl.addEventListener("click", (event) => {
  if (event.target.tagName === "LI" || event.target.tagName === "I") {
    // 활성화된 active 속성 제거 (다른 메뉴 클릭했으므로 다른 메뉴가 활성화)
    mFooterEl.querySelectorAll("li").forEach((el) => {
      el.classList.remove("active");
    });

    if (event.target.tagName === "LI") {
      event.target.classList.toggle("active");
    } else {
      event.target.parentNode.parentNode.classList.toggle("active");
    }
  }
});

navIcon.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV" || event.target.tagName === "SPAN") {
    if (event.target.tagName === "DIV") {
      navIcon.classList.toggle("open");
    } else {
      event.target.parentNode.classList.toggle("open");
    }
  }
});
