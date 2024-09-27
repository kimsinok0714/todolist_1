import { useReducer } from "react";

// 상태 변화 요청을 처리하는 함수
function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE': return state + action.data;
        case 'DECREASE': return state - action.data;
    }
}

const Exam = () => {

    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 상태 변화를 요청한다.
        // 인수 : 상태가 어떻게 변화되기를 원하는지 전달 : 액션 객체
        dispatch({
            type: 'INCREASE',
            data: 1
        });
    }

    const onClickMinus = () => {
        dispatch({
            type: 'DECREASE',
            data: 1
        });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )

}

export default Exam;