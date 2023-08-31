import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting name="Alison" signedIn={true}/>
    </div>
  );
}

export default App;


// Common technique.
//If the password received is equal to 'a-tough-password', the resulting message in <h2></h2> will be different
//The passed-in password is not displayed in either case! The prop is used to decide what will be displayed. 
function LoginMsg(props) {
    if (props.password === 'a-tough-password') {
      return <h2>Sign In Successful.</h2>
    } else {
      return <h2>Sign In Failed..</h2>
    }
  }