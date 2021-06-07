type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

interface PositionInterface {
    z: number;
}

// Object
const obj1: PositionType = {
    x: 1,
    y: 1,
}

const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1
}


// class 
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
    z: number;
}

type ZPositionType = PositionType & { z: number };


// only interfaces can be merged 
interface PositionInterface {
    z: number;
}

// type PositionType {
// }

// Type aliases can use computed properties 
type Person = {
    name : string,
    age: number,
}

type Name = Person['name'];


type NumberType = number;
// interface로 구현할수없다  
type Direction = 'left' | 'right';