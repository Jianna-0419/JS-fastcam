
// 초기화 하면서 선언된 변수를 중괄호 안의 반복 블록에서 사용할 수 있다
// for (let i = 0; i < 3; i++) {
//     console.log('기본 반복문', i);
// }

// 초기화 부분에서 변수 2개 가능
// for (let i =0, j = 2; i< 3; i++, j = j * j) {
//     console.log('변수 2개 반복문', i, j);
// }

// 반복문을 즉시 종료하고 싶으면 반복되는 블록 안에서 break; 를 실행하면 가능
// for (let i =0; i < 5; i++) {
//     console.log(i);
//     if (i > 2) {
//         break;
//     }
//     console.log('break 사용', i);
// }

// 반복되는 블록 안에서 continue; 를 만나면 거기서 바로 해당 블록은 종료합니다.
// 그리고 이와 같이 다음 반복이 있으면 다음 반복으로 넘어갑니다.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i < 2) {
//         continue;
//     }
//     console.log('continue 사용', i);
// }

for (i = 0; i < 4; i++) {
    console.log('케이스 i = ' + i);
    if (i > 3) {
        continue;
    }
    console.log('어떻게 하는 건지 찾는중', i);
}