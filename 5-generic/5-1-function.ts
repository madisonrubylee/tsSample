{
    function checkNotNullBad(arg: number | null): number {
        if(arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    const result = checkNotNullBad(123);
    console.log(result);

    checkNotNullBad(null);


    // type이 보장되지않는다. any를 사용하는것은 권장하지 않는다.
    function checkNotNullAnyBad(arg: any | null) : any {
        if(arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    // => generic 사용으로 타입을 보장받을 수 있다.
    function checkNotNull<T>(arg: T | null) : T {
        if(arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    const number = checkNotNull(123);
    const boal = checkNotNull(true);
}