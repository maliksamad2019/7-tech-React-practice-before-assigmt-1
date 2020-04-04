import React from 'react'; 
//import FuncComponent from '../PropPractice/FuncComponent';
// import A10thVideoTask from '../Practice/A10thVideoTask';
// import Counter from '../Practice/Counter';
// import FuncClick from '../Practice/FuncClick'
// import ComponentA from '../ComponentLifeCycle/ComponentA';
// import RefComponent from '../RefPractice/RefPractice';
//import ChildComponentRef from '../RefPractice/ChildComponentRef';

// import HoverCounter from '../HOC/HoverCounter';
// import ClickCounter from '../HOC/ClickCounter';

// import Counter from '../RenderProps/Counter';
// import HoverCounter from '../RenderProps/HoverCounter';
// import ClickCounter from '../RenderProps/ClickCounter';

import {UserProvider} from '../ContaxtPractice/userContaxt';
import ComponentA from '../ContaxtPractice/ComponentA'

function App() {
  return (
    <div style={{textAlign:'center'}}>  

      {/* <FuncComponent clientName=" -> MASK">this is child</FuncComponent> */}
      {/* <A10thVideoTask ></A10thVideoTask> */}
      {/* <Counter ></Counter> */}
      {/* <FuncClick></FuncClick> */}
      {/* <ComponentA /> */}
      {/* <RefComponent /> */}
      {/* <ChildComponentRef /> */}
      {/* <ClickCounter /> 
      <HoverCounter />  */}

      {/* <Counter>
        {(count, increment)=> <HoverCounter count={count} increment={increment}/>}
      </Counter> 
      <Counter>
        {(count, increment)=> <ClickCounter count={count} increment={increment}/>}
      </Counter> */}

      <UserProvider value={<span style={{color:'blue'}}> Malik Samad </span>}>
        <ComponentA />
      </UserProvider>

    </div>
  );
}

export default App;
