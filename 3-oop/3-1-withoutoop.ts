{   
    // 커피콩 
    // 커피 만드는 함수 ( 한가지 인자 shot 전달 )
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    
    // 상수로 숫자를 정해줄때는 타입추론으로 number를 명시하지 않아도 괜찮다.
    const BEANS_GRAMM_PER_SHOT: number = 7

    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {
       if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
           throw new Error('Not enough coffe beans!');
       } 
       coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
       return {
           //shots: shots,
           // key 와 value의 이름이 동일하다면 생략이 가능하다.
           shots,
           hasMilk: false,
       }
    }
    
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}