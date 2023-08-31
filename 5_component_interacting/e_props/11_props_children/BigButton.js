import React from 'react';
import LilButton  from './LilButton';

function BigButton(props) {
  console.log(props.children);
  return <button>I am a Big Button.</button>;
}

export default BigButton;

// // Example 1
// <BigButton>
//   I am a child of BigButton.
// </BigButton>


// // Example 2
// <BigButton>
//   <LilButton />
// </BigButton>


// // Example 3
// <BigButton />


//     In Example 1, <BigButton>‘s props.children would equal the text, “I am a child of BigButton.”
//     In Example 2, <BigButton>‘s props.children would equal a <LilButton /> component.
//     In Example 3, <BigButton>‘s props.children would equal undefined.

// If a component has more than one child between its JSX tags,
// then props.children will return those children in an array. 
//However, if a component has only one child, 
//then props.children will return the single child, not wrapped in an array.