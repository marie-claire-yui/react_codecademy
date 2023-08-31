import React from 'react';

function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick}>Submit</button>;// the event handler is handleClick().
  // It is passed as a prop to the JSX element <div>.
}

// This is because passing it as handleClick indicates it should only be called once the event has happened.
// Passing it as handleClick() would trigger the function immediately, so be careful!

export default SubmitButton;



//Review

// Congratulations! You have finished the lesson on React components.

// Here’s a short recap of the concepts introduced in this lesson:

//     Function components can return multiple JSX lines by nesting the elements in a parent element.
//     Variable attributes can be used inside of a React component with JavaScript injections.
//     React components support logic by putting the logic statements above the return statements.
//     Components can conditionally return JSX elements by putting conditional statements inside of the components.
//     Components can respond to events by defining event handlers and passing them to the JSX elements.

// Great job on tackling these complex topics! You have spent a lot of time studying React components in isolation! Now, it’s time to learn how components fit into the world around them.
