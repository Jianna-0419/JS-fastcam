// 그냥 여러가지 연습 중

const box = document.querySelector(".box");
const h1 = document.querySelector("h1");

h1.addEventListener("click", changeColor);

function changeColor() {
    if (h1.style.color !== "red") {
        h1.style.color = "red";
        h1.innerText = "빨강입니다";
    } else {
        h1.style.color = "white";
        h1.innerText = "하얀색입니다.";
    }
}