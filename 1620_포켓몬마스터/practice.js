// NaN은 다른 값과 비교시에 항상 false를 반환한다.
// 자기자신(NaN)과 비교해도 false를 반환하기 때문에, isNaN 메소드를 사용해서 확인해야한다.
const str = "가나다";
console.log(+str === NaN); // false
console.log(isNaN(+str));
