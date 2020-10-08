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
    }

            // split : string 을 지정한 separator로 잘게 나누어 주고 배열로 리턴 (string)
            //          구분자는 꼭 전달해줘야함 
            // limit? = 리턴 받을 데이터의 사이즈 지정 (number)
            //          꼭 쓸 필요는 없다 (안쓰면 문자열 전체 리턴)
    


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
    } 
            // splice 는 기존의 배열을 수정하는 것이 아니라 기존 배열을 이용해서 새로운 배열을
            // 만들어야하기 때문에 적합하지 않다

            // slice : 배열의 특정 부분을 리턴 (start, end) -> 하지만 쓴 end 번째 index 부터 제외 
    


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
    }
            // find : 처음으로 predicate 가 true 가 나오면 콜백 함수를 멈추고 리턴(?)
            //        callback 함수를 만들어서 전달해야한다 
            // 한 줄로 써도 된다 .find((sstudent) => student.score === 90)
    

// Q6. make an array of enrolled students   등록한 학생들(true) 만 
    {
        const result = students.filter((student) => student.enrolled);
        console.log(result);
    } 


// Q7. make an array containing only the students' scores 
    // result should be: [45, 80, 90, 66, 88]
    {
        const result = students.map((student) => student.score);
        console.log(result);
    }
        // map : 
        // 배열 안에 있는 요소 한가지 한가지를 다른 것으로 변환해주는 것
        // 안에 있는 값을 콜백 함수를 통해서 다른 값으로 변환해서 리턴해준다 
            // 콜백 함수가 짧은 코드라면 인자에 확실하게 무엇을 뜻하는지를 적어주는게 좋다 
            // value.score 이렇게 하면 바로 무엇을 말하는지 파악하기 어렵기 때문!


// Q8. check if there is a student with th escore lower than 50. -> 있다면 true 리턴!
    {
        console.clear();
        const result = students.some((student) => student.score < 50);
        console.log(result);        // true 출력 

        const result2 = !students.every((student) => student.score >= 50);
        console.log(result2);       // ! : 값을 반대로 리턴 !!
    }

        // some
        // 배열의 요소 중에서 콜백 함수가 true 로 리턴이 되는 애가 있는지 없는지 리턴해주는 아이!
        // 하나라도 조건에 충족(ture)하면  true 를 리턴!

        // every
        // 배열의 모든 요소들이 조건에 충족해야지만 true 리턴

        // 하나라도 있는지 = some , 모두가 그런지 = every 쓰면 된다 

    
// Q9. compute students' average score
    {
        const result = students.reduce((prev, curr) => prev + curr.score, 0) ;
        console.log(result / students.length);
    }

        // reduce
        // 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적하는 것
        // 콜백과 이니셜 value 전달 -> 콜백 함수 -> 리턴값은 어떤 값이 누적된 값
        // 우리가 리턴하는 값이 순차적으로 prev 가 되고 반복
        // A, B --> B, C --> C, D ...

        // reduceRight : 순서가 반대로 호출

// Q10. make a tring containing all the scores 
    // result should be: '45, 80, 90, 66, 88'
    {
        const result = students
        .map((student) => student.score)
        .filter(score => score >= 50)
        .join();                             // score 만 배열로 만들기
        console.log(result);  
    }

        // API 들을 섞어서 쓸 수도 있다
        // 가독성도 좋다 


// Bonus! do Q10 sorted in ascending over
    // result should be: '45, 66, 80, 88, 90'
    {
        const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)          // 점수가 큰거부터 나오게 하고싶으면 b - a 하면 된다 
        .join();
        console.log(result);
    }


// 헷갈리구 어렵지만 유용해보이니까 복습하기 !