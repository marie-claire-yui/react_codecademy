//  The State Hook is a named export from the React library, so we import with object destructuring
// Import the default export from the 'react' library and call it React. We also will be using the State Hook, so go ahead and import the named export useState from the 'react' library as well.
import React, { useState } from 'react';

//Use const to declare and assign the return values from calling useState() to color and setColor.
export default function ColorPicker() {
  const [color, setColor] = useState();

 const divStyle = {backgroundColor: color}; //Update the divStyle object so that the backgroundColor property is set to our current state value instead of always showing purple. 
//  In the JSX, use onClick event listeners to call the setColor() state setter function with the appropriate color when the user clicks on each of these buttons.
  return (
    <div style={divStyle}> 
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}