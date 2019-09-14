import React from 'react';
import { render } from 'react-dom';

 
import App from './App';
 

 

 


// const lp=({
//     ProfileId,
//     Phase,
//     ActualTime,
//     StartTime,
//     CommitTime,
//     Interactions
//   })=>{
//     console.log({
//         ProfileId,
//         Phase,
//         ActualTime,
//         //Time taken by react,
//         StartTime, //time at which render starts
//         CommitTime,
//         Interactions
//     });
//   };


// trace("initial render",performance.now(),()=>
// render(
//  <Profiler id="Application" onRender={lp}>  
//     <Provider store={store}>
//         <App />
//     </Provider></Profiler>,document.getElementById('root'))    
// );

//trace("initial render",performance.now(),()=>
render(<App />,document.getElementById('root'));    
