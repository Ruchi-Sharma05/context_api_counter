import { createContext } from "react";

let store = createContext({
    counter:1000,
    increment:() => {},
    decrement:() => {}

})

export default store