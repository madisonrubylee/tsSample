{   
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // 인터페이스명 앞에 I 를 붙이거나 class에 Impl을 붙이기도한다. 
    interface CoffeeMaker {
        makeCoffee(shots: number) : CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
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
            return new CoffeeMachine(coffeeBeans);
        }

        // 내부 변수를 숨겨놓고 외부에서는 public 함수를 이용해서 내부의 상태를 변경할수 있음
        fillCoffeeBeans(beans: number) {    
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        grindBeans(shots: number){
            console.log(`grinding beans fro ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffe beans!');
            } 
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        preheat(): void {
            console.log('heating up ... ');
        }

        extract(shots:number): CoffeeCup {
            console.log(`Pulling ${shots} shots... `);
            return {
                //shots: shots,
                // key 와 value의 이름이 동일하다면 생략이 가능하다.
                shots,
                hasMilk: false,
            }
            
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();

            return this.extract(shots);
        }
    }
    
    // static을 붙이지 않으면 BEANS_GRAMM_PER_SHOT이 매번 공유되어 출력되기때문에 낭비가 될 수 있음. 
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);
    // maker.coffeeBeans = -32; // invalid 외부에서 설정하지못해야함.

    // 추상화를 사용하지않으면 maker. 으로 확인했을때 extract,fillCoffeBeans 등 사용할수있는 함수가 많아보인다. 
    // encapsulateion, interface를 통해서 추상화를 할 수 있다. 
    // 보통 정보 은닉을 통해서 추상화가 가능하다. ( 필요한 함수 제외 하고 private 예약어 ) 

    // CoffeeMaker 안에는 makeCoffee 함수밖에 없기 때문에 인터페이스를 이용하면 얼마만큼의 행동을 허용할건지 결정할 수 있다.
    // const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    const maker2: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(2);
}

