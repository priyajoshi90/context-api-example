import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import configureStore from './store/configureStore';
import {loadCourse} from './actions/courseAction';
 
const store=configureStore();
store.dispatch(loadCourse());

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
render(
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById('root')
);    
