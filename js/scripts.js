const toggleBtn = document.querySelector(".header__togle--btn");
const sitenav = document.querySelector(".sitenav");

toggleBtn.addEventListener("click", () => {
  sitenav.classList.toggle("hidden");
});
