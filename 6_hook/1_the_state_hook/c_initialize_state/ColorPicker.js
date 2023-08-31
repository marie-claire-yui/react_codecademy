import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState("Tomato"); //initialize the state so that “Tomato” is the selected color for our component’s first render.

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}


// Like how you used the State Hook to manage a variable with string values, we can use the State Hook to manage the value of any primitive data type and even data collections like arrays and objects!





// import React, { useState } from 'react';

// function ToggleLoading() {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <div>
//       <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
//       <button onClick={() => setIsLoading(true)}>
//         Turn Loading On
//       </button>
//       <button onClick={() => setIsLoading(false)}>
//         Turn Loading Off
//       </button>
//     </div>
//   );
// }