/**
 * Data Types
 * 여섯 개의 Primitive Type과 한 개의 Object Type이 있다.
 * 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object
 *    Function
 *    
 */

//Number 
const age = 32;
const temperature = -10;
const pi = 3.14;
const inf = Infinity;
const ninf = - Infinity;
console.log(typeof age);    // 타입을 알고 싶을 땐 'typeof 변수'

//String
const codeFactory = '코드팩토리';
const ive = "'아이브'"
/**
 * Template Literal
 * `안에 어떤 식으로 써도 상관없음!`
 * `${다른 변수}`
 * 
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */

//Boolean
const isTrue = true;
const isFalse = false;

//undefined: 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값이자 타입

//null: undefined와 마찬가지로 값이 없다는 뜻이나 JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용되는 값. (타입은 object로 인지된다.)
const init = null;
console.log(typeof init)

//Symbol: 유일무이한 값을 생성할 때 사용. 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용한다.
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);    //true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);    //false

/**
 * Object
 * key:value
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색'
};
console.log(dictionary['red'] === dictionary.red);

/**
 * Array 타입
 * 값을 리스트로 나열할 수 있는 타입. index 사용
 * 타입은 Object 타입으로 나옴.
 */
const iveMenbersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMenbersArray[0]);
console.log(iveMenbersArray[-1]);    // 유효하지 않음(undefined)

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다.
 */