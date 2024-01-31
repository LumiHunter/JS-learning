let number = 1;
let result = 1;
result = number++;
console.log(result, number);    // 1, 2

/**
 * 증가/감소 연산자 ++, --는 = 보다 뒷순위다.
 * 증감연산자를 앞에 쓰는 경우(=보다 앞순위)는 js에선 거의 없다. 쓰지 마라.
 */

let sample = '99';
console.log(+sample);    // 99
console.log(typeof +sample);    // number

console.log(sample);    // 99
console.log(typeof sample);    // string

sample = true;
console.log(+sample);    // 1
console.log(typeof +sample);    // number

sample = false;
console.log(+sample);    // 0
console.log(typeof +sample);    // number

sample = '안유진';
console.log(+sample)    // NaN: Not a Number

/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log('5' == 5);    // true
console.log(0 == '');    // true
console.log(false == 0);     // true
console.log(true == '1');    // true

