/**
 * 타입 변환
 * 1) 명시적
 * 2) 암묵적
 */

// 명시적
let age = 30;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적(사용하지 X)
let test = age + '';
console.log(typeof test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

/**
 * 명시적 변환 더
 */

console.log(typeof parseInt('0'), parseInt('0')) // 정수로 변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')) // 실수로 변환
console.log(typeof +'1', +'1')

console.log('-------------------');

/**
 * Boolean 타입으로 변환
 */

console.log(!!'x');
console.log(!!'');
console.log(!!0);
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);
