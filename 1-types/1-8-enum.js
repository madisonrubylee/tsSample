{
    /**
     * Enum
     */
    // JavaScript 
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 20;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    // 여러가지 상수를 한곳에 보관하고 타입이 안전하게 보장되도록 ENUM을 구현 
    var DAYS_ENUM = Object.freeze({ "MONDAY": 0, "UESEDAY": 1, "WEDNESDAY": 2 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    //TypeScript
    // 값을 따로 정하지않으면 0 부터 1씩 증가해서 자동으로 계산된다. 
    // 문자열 할당시 다음에 어떤게 할당될지 모르기때문에 수동으로 하나씩 입력을 해줘야한다. 
    // TypeScript에서는 Enum을 사용하지 않는것이 좋다. 
    var Days = void 0;
    (function (Days) {
        //Monday = 1,
        Days["Monday"] = "monday";
        Days["Tuesday"] = "tuesday";
        Days["Wednesday"] = "wd";
        Days["Thursday"] = "ts";
        Days["Friday"] = "fri";
        Days["Saturday"] = "satu";
        Days["Sunday"] = "sun";
    })(Days || (Days = {}));
    console.log(Days.Tuesday);
    var day = Days.Saturday;
    console.log(day);
}
