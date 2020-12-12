const printString = (string) => {
    setTimeout(
        () => {
            console.log(string);
        },
        Math.floor(Math.random() * 100) + 1
    )
}

const printAll = () => {
    printString("a");
    printString("b");
    printString("c");
}

printAll()

// 순서가 랜덤으로 나오게 된다 