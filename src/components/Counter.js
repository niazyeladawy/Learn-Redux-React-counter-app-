import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { increase, decrease } from '../store/counterSilce';


function Counter() {
    const globalState = useSelector(state => state);
    const dispatch = useDispatch();

    const counterHandler =useCallback( (type , value)=>{
        if(type === "increase"){
            dispatch(increase(value));
        }
        else{
            dispatch(decrease(value));
        }
    },[dispatch]);

    useEffect(() => {
        counterHandler("increase",5)
    }, [counterHandler]);
    

    const isLoggedIn = ()=>{
        return globalState.auth.isLogged;
    }

    return (
        <div className="App">
            <h1>Redux Bascis</h1>
            {
                isLoggedIn() && (
                    <>
                        <div className='counter'>Counter:{globalState.counter.value}</div>
                        <div>
                            <button onClick={() => counterHandler("increase",5)}>increase</button>
                            <button onClick={() => counterHandler("decrease",5)}>decrease</button>
                        </div>
                    </>
                )
            }

            <div>
                <button onClick={() => dispatch(login())}>{isLoggedIn() ? "logout" : "login"}</button>
            </div>
        </div>
    );
}

export default Counter