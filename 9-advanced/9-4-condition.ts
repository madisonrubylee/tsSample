
type Check<T> = T extends string? boolean : number;
type Type = Check<string>; 

type TypeName<T> = T extends string 
    ? 'string'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function 
    ? 'function'
    : 'object';

    // conditional type : 타입을 조건적으로 결정할 수 있다.
    type T0 = TypeName<string>; 'string'
    type T1 = TypeName<'a'>; 'string'
    type T2 = TypeName<() => void>; 'function'
