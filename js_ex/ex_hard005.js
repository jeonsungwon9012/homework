/*

for (var i=0;i<3;i++) {
    setTimeout(function () {
        console.log(i);
    },1000);
}

*/
// prob ) 
// var은 함수 스코프로 작동한다. 
// 함수 스코프란 변수가 선언된 함수 내부에서만 유효. 
// 따라서 반복문은 이미 끝난 상태에서 i의 값은 3이 됨.

// sol 1 ) let은 블록 스코프로 작동한다. 
//      블록 스코프란 블록 { } 내부에서만 유효.
for (let i=0;i<3;i++) {
    setTimeout(function () {
        console.log(i);
    },1000);
}

// sol 2 ) 즉시 실행 함수 
// 구조 f(i){
//
//      } (i);
// var i를 넘겨서 새로운 매개변수로 전달됨 따라서 3개 생성.
for (var i=0;i<3;i++) {
    (function(i) {
        setTimeout(function () {
            console.log(i);
        },1000);
    })(i);
}