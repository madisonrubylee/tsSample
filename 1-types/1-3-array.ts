{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const scores: number[] = [1,2,3,4];
    // or 제네릭 
    const score: Array<number> = [1,2,3,4];
    
    // readonly 가 있다면 이 함수는 주어진 데이터를 변경할수 업섹된다. 
    // readonly 를 작성할때는 Array<string>으로 작성하는게 허용되지 않는다.
    function printArray(fruits: readonly string[]) {}

    // Tuple : 서로 다른 타입을 가질 수 있는 배열 
    // ex ) 리액트 usetState가 튜플형태로 리턴된다.
    // interface, type alias, class로 대체해서 사용하는걸 권장 
    let student: [string, number];
    student = ['name', 123];
    student[0]; 
    student[1];
}