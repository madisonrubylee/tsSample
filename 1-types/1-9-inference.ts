/**
 * Type Inference (추론) 
 */
let text = 'hello';
// 선언함과 동시에 문자열이기때문에 문자열 이외의 타입작성시 에러가 난다 
//text = 1;
function print(message) {
    console.log(message);
}

print('hello');

function add(x : number, y: number): number{
    return x + y;
}

const result = add(1, 2);

{
    
}