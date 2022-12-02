const toggleBtn = document.querySelector(".header__toggle--btn");
const sitenav = document.querySelector(".sitenav");

toggleBtn.addEventListener("click", () => {
  sitenav.classList.toggle("hidden");
});
