/**
 * Hoisting
 */

console.log(name); // undefined로 출력됨
var name = "코드팩토리";
console.log(name);

/**
 * Hoisting이란: 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 의미한다. (함수도 마찬가지)
 *               let과 const도 Hoisting 현상이 일어남
 *               단 var처럼 에러를 일으키지 않고 undefined 변수처럼 처리해버리는 현상을 let과 const가 막음
 */

console.log(Jieun); // Cannot access 'Jieun' before initialization
let Jieun = "지은";
console.log(Jieun);

console.log(Hwang); //Cannot access 'Hwang' before initialization
const Hwang = "황";
console.log(Hwang);
