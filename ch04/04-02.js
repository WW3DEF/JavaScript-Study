// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id : 1, name : 'Lee'};

var users = [
    { id : 1, name: 'Lee'},
    { id : 2, name: 'kim'}
];

console.log(user); /* user 변수 출력 */ 
console.log("========"); 
console.log(users[0]); /* users 변수 출력 */
console.log(users[1]);  /* users 변수 출력 */

var result = 10 + 20;

var score; // 값을 할당해주지 않았기에 undefind라는 값으로 암묵적으로 할당

// 04-06
var score; // 변수 선언
score = 80;

// 04-07
var score = 80; // 변수 선언과 값의 할당