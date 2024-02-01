let number = 1;
let result = 1;
result = number++;
console.log(result, number); // 1, 2

/**
 * 증가/감소 연산자 ++, --는 = 보다 뒷순위다.
 * 증감연산자를 앞에 쓰는 경우(=보다 앞순위)는 js에선 거의 없다. 쓰지 마라.
 */

let sample = "99";
console.log(+sample); // 99
console.log(typeof +sample); // number

console.log(sample); // 99
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = "안유진";
console.log(+sample); // NaN: Not a Number

/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log("5" == 5); // true
console.log(0 == ""); // true
console.log(false == 0); // true
console.log(true == "1"); // true

/**
 * 삼항 조건 연산자: 조건? A: B -> true이면 A false이면 B
 */

/**
 * 논리연산자
 * 1) and && : 모두 true여야 true
 * 2) or || : 하나라도 true면 true
 */
/**
 * 단축평가: 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환
 *           좌->우로 평가하면서, 결과를 결정하는 피연산자를 만나면 그를 바로 반환
 *          javaScript에서 논리연산자는 2개의 피연산자 중 어느 한 쪽으로 평가된다.
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log("-------------------");
console.log(true || " 아이브");
console.log(false || "아이브"); // false or true -> true지만, "아이브"
console.log(true && "아이브"); // true and true -> true지만, "아이브"
console.log(false && "아이브");

/**
 * null 연산자 ??: 좌측이 null 또는 undefined였을 때 우측 반환
 */
let name; // undefined
name = name ?? "코드팩토리";
console.log(name); // 코드팩토리

let name2;
name2 ??= "아이브";
console.log(name2); //아이브
