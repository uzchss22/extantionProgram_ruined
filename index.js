const elems = document.querySelectorAll("*");


function handleClick(event) {
  const clickedElem = event.target;
  clickedElem.style.display = "none";
  
}


elems.forEach(elem => {
  elem.addEventListener("click", handleClick);
});
