interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!`);
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!!`);
        
    }

    workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지않다 
function payBad(employee: Employee): Employee {
    employee.pay();

    return employee;
} 

const harper = new FullTimeEmployee();
const bob = new PartTimeEmployee();
harper.workFullTime();
bob.workPartTime();

const harperAfterPay = payBad(harper);
const bobAfterPay = payBad(bob);

// 이 이후에는 workFullTime() 함수를 사용하지 못한다. ( employee를 리턴했기 때문에 )
//harperAfterPay.pay()

// 확신이 있다면 casting을 하지만 가능하면 as를 쓰는건 좋지 않다  
//const harperAfterPay = pay(harper) as FullTimeEmployee;




// 제네릭 사용 
// extends를 활용하여 제네릭이지만 employee를 확장한 타입만 가능하다. 
function pay<T extends Employee>(employee: T): T {
    employee.pay();

    return employee;
}