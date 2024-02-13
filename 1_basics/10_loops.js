/**
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j)
    }
}

// *을 이용해 6x6 정사각형 출력
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}
console.log(square);

/**
 * for ... in => key 값
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브'
}

for (let key in yuJin) {
    console.log(key, `${yuJin[key]}`);
}

const goneTommorrowArray = ['김옥균', '한정훈', '이희', '이완', '한종윤'];
for (let key in goneTommorrowArray) {
    console.log(key, `${goneTommorrowArray[key]}`);
}

/**
 * for ... of => value 값
 */

for (let value of goneTommorrowArray) {
    console.log(value);
}

// for (let value of yuJin) {
//     console.log(value);
// }
// object는 for ... of 를 쓸 수 없다. 'not iterable' 하기 때문!

/**
 * while
 */

let number = 0;
while (number < 10) {
    number++;
}
console.log(number);

/**
 * do ... while (안 쓰는 것 추천)
 */

number = 0;
do {
    number++;
} while (number < 10);
console.log(number);

/**
 * break: 루프를 아예 끝냄
 */

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log('-----------------');
number = 0;
while (number < 10) {
    if (number === 5) {
        break;
    }
    number++;
    console.log(number);
}

/**
 * continue: 그 부분만 건너뜀
 */
console.log('----------------------');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log('----------------------');

number = 0;
while (number < 10) {
    number++;
    if (number === 5) {
        continue;
    }
    console.log(number);
}