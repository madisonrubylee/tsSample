// module scope
{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint , symbol, null, undefined
     * Object : function, array....
    */

    // number
    const num:number = 3;

    //string
    const str:string = 'hello';

    //boolean
    const boal:boolean = false;

    // undefined : 값이 존재하는지 존재하지 않는지 결정되지 않은 상태 
    let name: undefined;
    let age: number | undefined; // 보편적으로 | null 보다 더 많이 사용한다.
    age = undefined;
    age = 20;

    // null : 값이 없음을 명시함 
    let person: null; // 이렇게 단독으로는 사용을 잘 안한다
    let person2: string | null; 

    // unknown : 어떤 타입의 데이터가 담기는지 알 수 없음 (가능하면 사용하지 말자)
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any : 어떤 타입이든지 사용할수있음 (가능하면 사용하지 말자)
    let anything: any = 0;
    anything = 'hello';

    //void 함수에서 리턴하는 값이 없으면 void 이다. (생략 가능)
    function print(): void {
        console.log('hello');
        return;
    }

    // never : 절대 발생할 수 없는 타입 
    // 리턴하지 않는 함수.
    function throwError(message: string): never {
        // message -> server (log)
        
        // never가 아닐경우 에러가 발생한다.

         throw new Error(message);
        // 2) while(true) {

        //}
    }

    // object : primitive type을 제외한 모든 object 타입을 할당할 수 있다. 
    // 쓰지 않는것이 좋다. 좀더 어떤 타입인지 명시적으로 작성하는것이 좋다.
    let obj: object;    
    function acceptSomeObject(obj: object) {
        
    }
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});

}