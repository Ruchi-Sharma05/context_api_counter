
import { useContext } from 'react';
import './App.css';
import store from '../Contentapi/Store';
// two type of 1. store.consumer 
// function App() {
//   return (
//     <div className="App">
//       <store.Consumer>
//         {(s)=>(
//        <p>Counter :{s.counter} </p>
//         )}
//       </store.Consumer>
//       <button>Increment</button> 
//       <button>Decrement</button>
      
//     </div>
//   );
// }

//2. type use contect

function App() {
  let s = useContext(store)
    return (

      <div className="App">
      <p>Counter :{s.counter} </p>
        <button onClick={s.increment}>Increment</button> 
        <button onClick={s.decrement}>Decrement</button>
        
      </div>
    );
  }

export default App;
