// 사용 변수
const GAME_TIME = 3;    
        // 같은 숫자를 반복해서 사용하는 거보다 설정해서 쓰는게 낫다
        // 변경도 쉬움
let score = 0;
let time = 5;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

init();

function init() {
    getWords();
    wordInput.addEventListener("input", checkMatch);
}

// 게임 시작 클릭 시, run 함수 실행
function run() {
    if (isPlaying) {
        return;     // 게임중일 때 눌러도 초기화 되지 않게!
    }
    isPlaying = true;
    time = 5;       // 시작시, 시간 초기화 
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임 중');
}


// 단어 불러오기 
function getWords() {
    words = ['Hello', 'Banana', 'Apple', 'Cherry'];
    buttonChange('게임 시작');
}
    
// 단어 일치 체크 
function checkMatch() {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        wordInput.value = "";       // input 초기화 
        if (!isPlaying) {
            return;
        }
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex];
    }
    // Math.floor : 소수점 버리기
    // Math.random * #  : # 숫자까지 랜덤으로 숫자 뽑기
}
    // innerHTML 은 공백도 포함된다 
    // toLowerCase() : 무조건 소문자로 비교 


// 게임 상태 체크 
function checkStatus() {
    if (!isPlaying && time === 0) {
        buttonChange('게임 종료');
        clearInterval(checkInterval);
    }
}



function countDown() {
    time > 0 ? time-- : isPlaying = false;
    if (!isPlaying) {
        clearInterval(timeInterval);    // timeInterval(반복 함수) 종료
    }
    timeDisplay.innerText = time;
}

function buttonChange(text) {
    button.innerText = text;
    text === '게임 시작' ? button.classList.remove('loading') : button.classList.add("loading");

}