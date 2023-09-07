import {useDispatch, useSelector} from "react-redux"
import { increment, incrementByValue } from "./conterSlice";


const CounterView = () => {

const count=useSelector(state=>state.counter.count)

const dispatch=useDispatch();

  return (
    <div>
    <h2>Count:{count}</h2>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <button onClick={()=>dispatch(incrementByValue(10))}>IncrementBy_5</button>
    </div>
  )
}

export default CounterView
