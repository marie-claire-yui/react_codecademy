import React from 'react';

function Button(props) {
  return (
    <button onClick={props.talk}>
      Click me!
    </button>
  );
}

export default Button;


// In Button.js, add an onClick attribute to the <button> element in the return statement.

// Remember that you named your prop talk previously.
// Use the talk property of props as the value of the onClick attribute.