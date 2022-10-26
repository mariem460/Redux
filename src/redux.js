import {createStore} from 'redux';
function  ReduxDemo  (){

    //step1: create store that requires state and reducer
  const store = createStore(reducer, "peace")

  //step2: create reducer that requires state and action
  //reducer ---> is a function that takes a state and action as params

  const reducer = function (state, action){
    if(action.type==="ATTACK"){
      return action.payload
    }
    if(action.type==="GreenATTACK"){
      return action.payload
    }
  }
  //step3: subscribe
  store.subscribe(()=> {
    console.log("Store is now", store.getState())
  })

  }

 export default ReduxDemo
  
