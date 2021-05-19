{
    // // JavaScript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;   
    // }

    // // TS 
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;   
    // }

    // // JavaScript
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }s

    // // TypeScript 
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }


    // 1) Optional parameter : 전달안해도 되는 인자에 적용할수있다. 
    function printName(firstName: string, lastName?: string) {
    // Optional parameter를 사용하지 않고 lastName: string | undefined 를 사용한다면
    // 함수 호출시 항상 무조건 정확하게 undefined를 명시해서 전달해야한다 
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve', 'Jobs');
    printName('Madison');
    printName('Harer');

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

    //Default Parameter를 지정하면 아무것도 전달하지않아도 에러가 나지 않는다.
    printMessage();

    // Rest parameter
    // function addNumbers(...args) {
    //     return args.reduce((a ,b) => {return a + b});
    // }

    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a ,b) => a + b);
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));

}