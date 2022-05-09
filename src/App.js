import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const globalState = useSelector(state => state);


  const counterOperation = (type,payload) => {
    dispatch({ type: type, payload: payload });
  }

  

  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
  }

  const handleCounterValue = (value)=>{
    if(value < 1){
      return "smaller than 1";
    }
    return value;
  }

  return (
    <div className="App">
      <h1>Redux Bascis</h1>
      {
        globalState.showCounter && 
        <>
        <div className='counter'>Counter:{handleCounterValue(globalState.value)}</div>
        <div>
          <button onClick={()=>counterOperation("increase",5)}>increase</button>
          <button onClick={()=>counterOperation("decrease",5)}>decrease</button>
        </div>
        </>
      }

      <div>
        <button onClick={toggleCounter}>Hide / show counter number</button>
      </div>
    </div>
  );
}

export default App;
