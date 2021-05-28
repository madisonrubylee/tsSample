{   
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number) : CoffeeCup;
    }
    
    // interface 구현 => implements
    class CoffeeMachine implements CoffeeMaker {

        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;   

        // 상속하는 자식에서 접근 가능한 protected or public으로 수정 
        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        
        
        static makeMachine(coffeeBeans: number) : CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {    
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log(`clean the machine`);
            
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

    class CafeLatteMachine extends CoffeeMachine {
        // 자식클래스에서 따로 생성자를 구현하는경우 부모의 생성자도 호출해야한다. 
        // 부모클래스에서 필요한 데이터를 받아온다 (beans) => super에 전달 
        constructor(beans: number, public readonly serialNumber: string) {
            // Constructors for derived classes must contain a 'super' call
            super(beans);
        }

        private steamMilk() : void {
            console.log('Streaming some milk... ');
        }

        // override
        makeCoffee(shots: number) : CoffeeCup {
            // super를 이용해서 상속하는 부모의 함수를 이용할 수 있다. 
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CafeLatteMachine(23, 'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine);
    
    

}

