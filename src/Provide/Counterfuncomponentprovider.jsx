import React,{useState} from 'react'
import store from './../Contentapi/Store'
export default function Counterfuncomponentprovider(props) {
let [counter,setcounter]=useState(0);
 const increment =()=>{
    setcounter(counter + 1);
 }
 const decrement =()=>{
    setcounter(counter - 1);
 }
  return (
    <store.Provider value={{
        counter:counter,
        increment:increment,
        decrement:decrement
    }}>
      {
        props.children
      }
    </store.Provider>
  )
}
