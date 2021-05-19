{
    /**
     * Type Aliases : 원하는 타입을 정할 수 있다. 
     * 원시타입 뿐만 아니라 객체도 지정할수있다. 
     */
    type Text = string;
    const name: Text = 'madison';
    const address: Text = 'korea';

    type Num = number;
    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: 'madison',
        age: 100,
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let madisonName: Name;
    // madisonName = 'dsf'; 
    madisonName = 'name'; 

    type JSON = 'json type';
    const json: JSON = 'json type';

    type Boal = true;
    const isCat: Boal = true;
}

