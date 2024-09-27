// [04 - 12]
// 하나의 문에서 여러개를 선언할 수 있다. 가독성이 나빠서 권장 X
var person, $elem, _name; first_name, val1;

// [04 - 13]
// ES5부터 유니코드 문자를 허용하기에 한글이나 한자, 일본어도 사용이 가능은 하다.
var 이름, 家羅;

// [04 - 14]
// 식별자의 명명 규칙에 위배되는 예시들
var first-name; // SyntaxError : Unexpected token -
var 1st; // SyntaxError : Invalid or Unexpected token 
var this; // SyntaxError : Unexpected token this

// [04 - 15]
// 대소문자를 구별하기 때문에 각각 별개의 변수다.
var firstname;
var firstName;
var FIRSTNAME;

// [04 - 16]
var x = 3; // 변수가 의미하는 바를 알 수 없음

var score = 100; // score 변수는 점수를 의미한다는 걸 알 수 있다

// [04 - 18]
// 카멜 케이스 (camel)
// 변수, 함수의 이름 지을때
var firstName;

// 스네이크 케이스 (snake)
var first_name;

// 파스칼 케이스 (pascal)
// 생성자, 클래스의 이름 지을때
var FirstName;

// 헝가리안 케이스 (typeHungarian)
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블
