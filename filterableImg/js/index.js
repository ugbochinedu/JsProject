const filter_buttons = document.querySelectorAll(".filter_buttons button");
const filterable_cards = document.querySelectorAll(".filterable_cards .card");

const filtercard = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
//   console.log(e.target)
  filterable_cards.forEach(card => {
    card.classList.add("hide")
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide")
      }
  })
};
filter_buttons.forEach((button) =>
  button.addEventListener("click", filtercard)
);
