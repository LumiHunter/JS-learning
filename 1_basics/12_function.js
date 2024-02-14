/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 실제 입력하는 값은 argument라고 한다.
 */

function calculate(x, y = 10) {
    console.log(((x * y) / 2 % 3).toString());
}

calculate(4);

/**
 * 반환받기: return 받기
 */

function multiply(x, y) {
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

/**
 * Arrow 함수
 */

const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(2, 3));

const multiply3 = (x, y) => x * y;   // multiply2 == multiply3
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;
console.log(multiply4(5));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}
console.log(multiply6(3)(4)(6));
console.log('---------------------');

const multiplyAugs = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
}
console.log(multiplyAugs(4, 5, 6));
console.log('---------------------');

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//immediately invoked fucntion -> 괄호 여닫음은 함수 실행이다.
(function (x, y) {
    console.log(x * y);
})(4, 5)

console.log(typeof multiply);
console.log(multiply instanceof Object);  //함수는 JavaScript에서 Object이다.