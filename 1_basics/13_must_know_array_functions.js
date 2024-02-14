/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);

//push(): array 맨 끝에 아이템 추가, array의 길이 반환 -> array를 직접 변경. 호출 될 때마다 실행.
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

//pop(): array 맨 끝에 있던 아이템 반환 -> array에서 빠짐.
console.log(iveMembers.pop());
console.log(iveMembers);

//shift(): array 맨 앞에 있던 아이템 반환 -> array에서 빠짐, pop()과 같음
console.log(iveMembers.shift());
console.log(iveMembers);

//unushift(): array 맨 앞에 아이템 추가, array의 길이 반환 -> push()와 같음.
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

//splice(): 지정한 인덱스 영역을 반환, array 변경.
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

console.log()
// immutable programming: 한번 선언한 변수를 변경시키지 않는 것이 최근에는 권장되고 있다.