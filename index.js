// 클릭 이벤트를 등록할 요소들을 선택합니다.
const elems = document.querySelectorAll("*");

// 요소를 클릭했을 때 실행할 함수를 정의합니다.
function handleClick(event) {
  // 클릭한 요소를 찾습니다.
  const clickedElem = event.target;
  
  clickedElem.style.display = "none";
  
}

// 모든 요소에 클릭 이벤트를 등록합니다.
elems.forEach(elem => {
  elem.addEventListener("click", handleClick);
});