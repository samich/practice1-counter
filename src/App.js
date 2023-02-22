import { useState } from 'react';
import './App.css';

function App(){

    var[count, setCount] = useState(0);

    function addNum() {        
        //this updates the base state
        setCount(count + 1);
        //therefore following statements will ignore
        //setCount(count + 1);
        //setCount(count + 1);

        /* if we want to get the current value of the variable
        we can use annoymous function in set state. */
        //setCount(count => count + 1);
        //setCount(count => count + 1);
        //setCount(count => count + 1);
    }

    function subtractNum(){
        setCount(count - 1);              
    }

    function resetNum() {
        setCount(0);
    }

    return(
        <div className="App">
            <h1>React State 1</h1>
            <p>React state test app</p>

            <div className="count">{count}</div>
            <button className="add" onClick={addNum}>Add</button>
            <button className="subtract" onClick={subtractNum}>Subtract</button>
            <button className="reset" onClick={resetNum}>Reset</button>
        </div>

    );
}

export default App;