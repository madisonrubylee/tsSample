{
    /**
     * Union Types : OR 
     * 발생할 수 있는 모든 케이스 중 하나만 할당할 수 있을때 사용하면 좋다.
     * 활용도가 매우 높다.
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    // 가능한 모든 인자를 확인할 수 있다. 
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    // function : login => success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function login(id: string, password: string): LoginState {
       return {
           response: {
               body: 'loggged in!',
           }
       }
    }

    // printLoginState(state: LoginState)
    // success -> body 
    // fail -> reason
    function printLoginState(state: LoginState) {
        // 좋지 않은 방법 
        if('response' in state) {
            console.log(` ${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }
}