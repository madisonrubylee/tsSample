{
    /**
     * Type Assertions ( 좋지 않음 ) - 100% 장담될때만.
     */
    // 리턴되는 타입은 알수없지만 return은 문자열임을 가정해봄
    function jsStrFunc(): any {
        //return 'hello';
        return 2;
    }

    const result = jsStrFunc();
    //type casting
    console.log((result as string).length);
    console.log((<string>result).length);
    
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));

    function findNumbers() : number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    //number.push(2); undefined일수 있으니 경고가 뜬다.
    // ! 붙인다면 undefined가 아님을 확신했을때 사용할 수 있다 .

    // const numbers = findNumbers()!;
    // numbers.push(2);
    // or 
    numbers!.push(2);

    // 100% 상황일때만 사용한다. 
    const button = document.querySelector('class')!;
   
}