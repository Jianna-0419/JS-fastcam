// Modal
// 열고 닫을 수 있는 유저 인터페이스
// 기존의 내용을 가리면서 나타나는 것

// import "styles.css";   왜 안되지..?

    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.querySelector('.modal-wrapper');
            // querySelector(' 클래스 이름 ')

    open.onclick = () => {
        modal.style.display = "flex";
    }

    close.onclick = () => {
        modal.style.display = "none"
    }

    // modal  =  .modal-wrapper 이니 헷갈리지 말자!

    //클릭하면  display 가 flex 가 되서 화면에 나오게 하기 

    /* 
        getElementById  =  html 에서 해당 id 불러오기
        querySelector  = 클래스 이름으로 찾기 
                       = 혹은 태그로 찾기  
    */