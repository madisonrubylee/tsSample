{
    const obj = {
        name: 'harper',
    }

    obj.name; // harper
    obj['name'] // harper


type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};


type Name = Animal['name' ] // string
const text: Name = 'hello'

// Index type을 이용하면 다른 타입에 있는 키에 접근해서 키의 value의 타입을 다시 선언할 수 있다 
type Gender = Animal['gender'];  // 'male' | 'female'

// Animal의 모든 키를 할당 
type Keys = keyof Animal;   // 'name' | 'age' | 'gender'
const key: Keys = 'gender';

type Person = {
    name: string;
    gender: Animal['gender'];
};

const person: Person = {
    name: 'harper',
    gender: 'male',
}

}