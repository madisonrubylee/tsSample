{   
    // 커피콩 
    // 커피 만드는 함수 ( 한가지 인자 shot 전달 )
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    
    class CoffeeMaker {
        // ts에서 멤버변수 선언시 키워드를 사용하지 않는다. 
        
        // stati - class level 
        static BEANS_GRAMM_PER_SHOT: number = 7
        coffeeBeans: number = 0;    // instance(object) level 클래스와 연결이 되어있기때문에 object마다 만들어지거나 생성되지 않는다.

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // 클래스를 만들지않고 함수를 이용해서 생성할수 있다. 
        static makeMachine(coffeeBeans: number) : CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
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
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    // static을 사용하여 간단하게 만들 수 있다. 
    const maker3 = CoffeeMaker.makeMachine(3);
    // 만약 static을 사용하지않으면 클래스레벨의 makeMachine을 호출할수 없고 만들어진 객체에서 접근할 수 있다. 
}

