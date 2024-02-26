import React, { Component } from 'react'
import '../App.css';
import store from '../Contentapi/Store'
// store.consumer  *************** 1st rule **************
// export class App extends Component {
//   render() {
//     return (
//       <div>
// <div className="App">
//     <store.Consumer>
//     {(s)=>(
//          <React.Fragment>
//        <p>Counter:{s.counter}</p>
//        <button onClick ={()=>s.increment}>Increment</button> 
//        <button onClick={()=>s.decrement}>Decrement</button>
//        </React.Fragment>
//     )}
//     </store.Consumer>
//      </div>
//       </div>
//     )
//   }
// }

//  ************* 2 rule ****************

export class App extends Component {
    static contextType = store
    componentDidMount(){
        console.log(this.context)
    }
    render() {
      return (
        <div>
  <div className="App">
    
         <p>Counter:{this.context.counter}</p>
         <button onClick={this.context.increment}>Increment</button> 
         <button onClick={this.context.decrement}>Decrement</button>

       </div>
        </div>
      )
    }
  }
  

export default App
