// Q1. make a string out of an array
    {
        const fruits = ['apple', 'banana', 'orange'];
        const result = fruits.join(' | ');       
        console.log(result);

        // join : 모든 아이템들을 지정된 대로 문자열로 리턴 (?)
        // 구분자를 넣지 않으면 자동으로 ',' 를 넣어준다 
        // seperator 구분자 = 구분해주는 문자나 기호 
    }

// Q2. make an array out of a string
    {
        const fruits = '🍈, 🍉, 🍊, 🍋';
        const result = fruits.split(', ', 2);       // 두가지만 리턴받기 !
        console.log(result);

        // split : string 을 지정한 separator로 잘게 나누어 주고 배열로 리턴 (string)
        //          구분자는 꼭 전달해줘야함 
        // limit? = 리턴 받을 데이터의 사이즈 지정 (number)
        //          꼭 쓸 필요는 없다 (안쓰면 문자열 전체 리턴)
    }


// Q3. make this array look like this: [5, 4, 3, 2, 1]
    {
        const array = [1, 2, 3, 4, 5];
        const result = array.reverse();
        console.log(result);
        console.log(array);         // 배열 자체와 리턴값 둘다 순서 반대로 만든다 
    }

// Q4. make new array without the first two elements
    {
        const array = [1, 2, 3, 4, 5];
        const result = array.slice(2, 5);      // index 2 ~ 4까지 나오기 (5 제외)
        console.log(result);                   // [3, 4, 5] 출력
        console.log(array);                     // 기존 배열은 그대로
        
        // splice 는 기존의 배열을 수정하는 것이 아니라 기존 배열을 이용해서 새로운 배열을
        // 만들어야하기 때문에 적합하지 않다

        // slice : 배열의 특정 부분을 리턴 (start, end) -> 하지만 쓴 end 번째 index 부터 제외 
    }


// 계속 사용될 클래스 
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ]

// Q5. find a student with the score 90
    {
        const result = students.find((student) => {
            // console.log(student, index);    // 학생 5명 하나하나 출력
            return student.score === 90;        // true 가 될때 멈춘다 (학생 C)
        });
        console.log(result);

        // find : 처음으로 predicate 가 true 가 나오면 콜백 함수를 멈추고 리턴(?)
        //        callback 함수를 만들어서 전달해야한다 
    }