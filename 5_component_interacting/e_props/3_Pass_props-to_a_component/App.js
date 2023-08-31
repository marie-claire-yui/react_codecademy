import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer myProp="Hello"/>;
} //PropsDisplayer is called with a prop named myProp and the string value "Hello"
// we pass props by giving the component an attribute


export default App;


// If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:

// <Greeting myInfo={["Astronaut", "Narek", "43"]} />

// In this next example, we pass several pieces of information to <Greeting />. The values that aren’t strings are wrapped in curly braces:

// <Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />
