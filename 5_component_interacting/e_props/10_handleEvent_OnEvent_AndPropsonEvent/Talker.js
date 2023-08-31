import React from 'react';
import Button from './Button';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button onClick={handleClick}/>;
}

export default Talker;

//The first name that you have to choose is the name of the event handler itself. 
//The second name that you have to choose is the name of the prop that you will use to pass the event handler. 
//This is the same thing as the attribute name.

//irst, think about what type of event you are listening for. In our example, the event type was “click”.
//If you are listening for a “click” event, then you name your event handler handleClick

// Your prop name should be the word on, plus your event type. 
//If you are listening for a “click” event, then you name your prop onClick