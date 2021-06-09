{
    type Video = {
    title : string;
    author: string;
};

// 어떠한 종류의 타입도 받아올 수 있다 
// 따라서 맵타입을 활용하면 기존의 타입을 변경할 수 있다 (재사용성)
type Optional<T> = {
    [P in keyof T]?: T[P] // for ... in 
}


// Video의 key 를 돌면서 title은 optional로 만들고 title은 optional 그리고 string타입을 optional로 만들 수 있다. 
type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
    title: 'hi',
};

type Animal= {
    name: string;
    age: number;
}
const animal: Optional<Animal> = {
    name: 'dog',
}

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}
animal.name = 'harper';

const video: Readonly<Video> = {
    title: 'hi',
    author: 'harper',
}
// 변경이 안됌 
//video.author = 

// type VideoOptional = {
//     title?: string;
//     author?: string;
//     description?: string;
// }

// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
// }



   // 기존의 value타입을 쓰거나 null이 가능한 타입 
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {

    // Nullable을 사용하지않으면 에러가 발생한다 
        title: null, 
        author: null,
    }
}