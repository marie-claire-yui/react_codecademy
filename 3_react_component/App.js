// React Components

// React applications are made of components.
// A component is a small, reusable chunk of code that is responsible for one job. 
// That job is often to render some HTML and re-render it when some data changes.
// Combined, they are the building blocks that make up a React application. 
//In a website, we can create a component for the search bar, another component
// for the navigation bar, and another component for the dashboard content itself. 


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MyComponent() {
//   return <h1>Hello world</h1>;
// }

// ReactDOM.createRoot(
// document.getElementById('app')
// ).render(<MyComponent />);


import React from 'react'; // import react
//This creates a JavaScript object named React, which contains methods necessary to use the React library. 
//  This object contains properties that are needed to make React work, such as React.createElement().
//React is imported from the 'react' package, which should be installed in your project as a dependency

function App() { // a function is defined with the name App.*
//Function component names must start with capitalization and are conventionally created with PascalCase
// Due to how JSX tags are compiled, capitalization indicates that it is a React component rather than an HTML tag. 
//This is a React-specific nuance! If you are creating a component, be sure to name it starting with a capital letter
// so it interprets it as a React component. If it begins with a lowercase letter, React will begin looking for a
// built-in component such as div and input instead and fail.
  return <h1>Hello again, World!</h1>; // Inside the function returns a React element in JSX syntax 
  //The body will act as a set of instructions, explaining to your function component how it should build a React component.
  // these instructions should take the form of a function declaration body. That means that they will be delimited by curly braces
 //Our instructions can include a combination of markup, CSS, and JavaScript to produce the desired result.
 // The one thing we must always include is a return statement. 
} // those combined makes a basic React component
// by writing a JavaScript function, a function component was defined.
// We can’t see this component quite yet, as it’s more of a factory that produces instances of itself when used. 
//If we want to see it, we need to render it into the DOM. 

export default App; // app is exported so it can be used later
// We can head into our index.js file to import our component from './App':

//Importing and Exporting React Components


//  In a React application, the App.js file typically is the top level of your application, 
//and index.js is the entry point.
// So far, we’ve defined the component inside of App.js, 
//but because index.js is the entry point, we have to export it to index.js to render. 


