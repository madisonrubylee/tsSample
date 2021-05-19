{
      // function : login => success, fail

     type SuccessState = {
         // union 타입을 사용할때, 조금 더 구분하기 쉽게 만드는것.
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function login2(id: string, password: string): LoginState {
       return {
           result: 'success',
           response: {
               body: 'loggged in!',
           }
       }
    }

    // printLoginState(state: LoginState)
    // success -> body 
    // fail -> reason
    function printLoginState2(state: LoginState) {
        if(state.result === 'success') {
            console.log(` ${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }
}