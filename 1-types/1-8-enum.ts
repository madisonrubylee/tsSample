{
    /**
     * Enum
     */
    // JavaScript 
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 20;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    // 여러가지 상수를 한곳에 보관하고 타입이 안전하게 보장되도록 ENUM을 구현 
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "UESEDAY":1, "WEDNESDAY":2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    // 값을 따로 정하지않으면 0 부터 1씩 증가해서 자동으로 계산된다. 
    // 문자열 할당시 다음에 어떤게 할당될지 모르기때문에 수동으로 하나씩 입력을 해줘야한다. 
    // TypeScript에서는 Enum을 사용하지 않는것이 좋다. (타입이 보장되지 않음)
    type daysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        //Monday = 1,
        Monday = 'monday',
        Tuesday = 'tuesday',
        Wednesday = 'wd',
        Thursday = 'ts',
        Friday = 'fri',
        Saturday = 'satu',
        Sunday = 'sun',
    }
    console.log(Days.Tuesday);
    let day:Days = Days.Saturday; 

    console.log(day);


    // Enum은 union타입으로 대체해서 사용할 수 있다. 
    let dayOfWeek: daysOfWeek = 'Monday';
    dayOfWeek = 'Wednesday';

    
}