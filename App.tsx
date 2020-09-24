import React, { Dispatch } from 'react';
import logo from './logo.svg';
import './App.css';


import { Action,CounterT } from './Redux/Store';

import { connect} from 'react-redux'

type P={
  mystate?:number,
  toggleOn:()=>void,
  Decrement:()=>void
}

function App({mystate,toggleOn,Decrement}:P) {
 
  return (


<div className="App">
  
{mystate}
<button onClick={()=>toggleOn()}>++</button>
<button onClick={()=>Decrement()}>--</button>
    </div>
  );
  }


const mapState = (state: CounterT) => ({
 mystate: state.count
})

const mapDispatch =(dispatch:Dispatch<Action>)=> {
 return { toggleOn: () => dispatch({type:'Add'}),
          Decrement:()=>dispatch({type:'Dec'})
}
}

export default connect(mapState, mapDispatch)(App);
