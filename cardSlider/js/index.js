const carousel = document.querySelector(".carousel");

const dragging = (e)=>{
    console.log(e.pageX)
    carousel.scrollLeft = e.pageX;
}
console.log(carousel)
carousel.addEventListener("mousemove", dragging);




































// const carousel = document.querySelector("#carousel");
// let initialMousePosition;

// const startDragging = (e) => {
//   initialMousePosition = e.pageX;
// }

// const dragging = (e) => {
//   if (initialMousePosition !== undefined) {
//     const scrollAmount = e.pageX - initialMousePosition;
//     carousel.scrollLeft += scrollAmo
//   }
// }

// const stopDragging = () => {
//   initialMousePosition = undefined;
// }

// carousel.addEventListener("mousedown", startDragging);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", stopDragging);
