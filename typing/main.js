let score = 0;
let time = 5;
let isPlaying = false;
let timeInterval;

const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

// 작성한 단어와 보이는 단어 비교 => 점수 올리기 
wordInput.addEventListener("input", () => {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        score++;
        scoreDisplay.innerText = score;
        wordInput.value = "";       // input 초기화 
    }
});
    // innerHTML 은 공백도 포함된다 
    // toLowerCase() : 무조건 소문자로 비교 


// 함수를 특정 시간마다 실행시키는 함수 
// setInterval(countDown, 1000);
buttonChange('게임 시작');


// click 과 동시에 시간을 줄이는 함수 
function run() {
    timeInterval = setInterval(countDown, 1000);
}

function countDown() {
    time > 0 ? time-- : isPlaying = false;
    timeDisplay.innerText = time;
}

function buttonChange(text) {
    button.innerText = text;
    text === '게임 시작' ? button.classList.remove('loading') : button.classList.add("loading");

}