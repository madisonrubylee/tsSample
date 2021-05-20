// function calculate(doSomething: string, ...numbers:number []): number{
//     switch(doSomething) {
//         case 'add':
//             return numbers.reduce((a,b) => a + b);
//         case 'substract':
//             return numbers.reduce((a,b) => a - b);
//         case 'multiply':
//             return numbers.reduce((a,b) => a * b);    
//         case 'divide':
//             return numbers.reduce((a,b) => a / b);
//         default:
//             return numbers.reduce((a,b) => a % b);
//     }   
// }

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(command: Command , a:number ,b:number ) : number {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw new Error('unknown error');
    }
}

console.log(calculate('add', 1,3));
console.log(calculate('substract', 3, 1));

console.log(calculate('multiply', 4, 2));
console.log(calculate('divide', 4 ,2));

console.log(calculate('remainder', 5, 2 ));
