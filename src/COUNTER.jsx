import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counter/Action';


function Counter() {
    const count = useSelector((state)=> state.counter.count);
  
     const dispatch= useDispatch();
 
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>plus</button>
        <button onClick={() => dispatch(decrement())}>minus</button>
     
      
    </div>
  )
}

export default Counter
