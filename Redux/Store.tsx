import { createStore } from 'redux'


export type Action = 
   {type:'Add'}
   |{type:'Dec'}
 
  


export const initState = {
    count:0
}
export interface CounterT {
    count:number,
    
}
export function  counter(state=initState, action:Action) {
  switch (action.type) {
    case 'Add':
      return {
        count:state.count + 1,
      }
      case 'Dec':
        
      return {
          count:state.count-1
        }
   
    default:
      return state
  }
}
 
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// let store = createStore(counter)



// export  {store};