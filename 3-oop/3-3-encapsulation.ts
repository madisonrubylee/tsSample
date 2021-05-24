{   
    // 커피콩 
    // 커피 만드는 함수 ( 한가지 인자 shot 전달 )
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    
    // public 
    // private : 외부에서 보거나 접근할 수 없다
    // protected : 클래스를 상속받은 자식클래스에서만 접근할 수 있다.
    class CoffeeMaker {
        // ts에서 멤버변수 선언시 키워드를 사용하지 않는다. 
        
        // 외부에서 접근할 필요가 없다면 private를 사용 
        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;    // instance(object) level 클래스와 연결이 되어있기때문에 object마다 만들어지거나 생성되지 않는다.

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        
        // 클래스를 만들지않고 함수를 이용해서 생성할수 있다. 
        // static키워드를 붙여서 object를 만들수있는 함수를 제공한다는것은 
        // 생성자를 이용해서 생성하는것을 금지한다는 뜻이므로 constructor를 private으로 만들어서 
        // 항상 이 static 메소드를 이용할 수 있도록 권장하는것이 좋다.
        static makeMachine(coffeeBeans: number) : CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 내부 변수를 숨겨놓고 외부에서는 public 함수를 이용해서 내부의 상태를 변경할수 있음
        fillCoffeeBeans(beans: number) {    
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
           if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
               throw new Error('Not enough coffe beans!');
           } 
           this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
           return {
               //shots: shots,
               // key 와 value의 이름이 동일하다면 생략이 가능하다.
               shots,
               hasMilk: false,
           }
        }
    }
    
    // static을 붙이지 않으면 BEANS_GRAMM_PER_SHOT이 매번 공유되어 출력되기때문에 낭비가 될 수 있음. 
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    // maker.coffeeBeans = -32; // invalid 외부에서 설정하지못해야함.

    class User {
        get fullName(): string {
            return `${ this.firstName } ${ this.lastName }`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num:number) {
            if(num < 0) {
                
            }
            this.internalAge = num;
        }

        // 생성자에 접근제어자 private 를 설정하면 바로 멤버 변수로 설정이 된다.
        constructor(private firstName: string, private lastName: string) {
            // this.firstName = firstName;
            // this.lastName = lastName;
             // 한번 할당되면 지정되어있기때문에 변하지 않는다 => getter, setter 이용으로 해결 
           // this.fullName = `${firstName} ${lastName}`
        }
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6;   // setter 호출 
    console.log(user.fullName);
}

