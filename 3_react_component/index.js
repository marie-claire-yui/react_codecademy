import React from 'react'; // import React 
//The methods imported from 'react' do not deal with the DOM at all.
import ReactDOM from 'react-dom/client'; //Import ReactDOM
// The methods imported from 'react-dom' interact with the DOM.
// ReactDOM deals with DOM-specific methods that should be used in index.js,
// which is the entry point of our application.
// = point de départ dans le code d'un programme informatique. 
// = C'est le point à partir duquel l'exécution du programme commence
// creates another JavaScript object. This object contains methods
// that help React interact with the DOM, such as ReactDOM.createRoot().

// Although we imported React in both App.js and index.js 
// we will only import ReactDOM in index.js. 


// To clarify: the DOM is used in React applications, 
// but it isn’t part of React. After all, 
//the DOM is also used in countless non-React applications. 
//Methods imported from 'react' are only for pure React purposes,
// such as creating components or writing JSX elements.



import App from './App';// We can head into our index.js file to import our component from './App':

ReactDOM.createRoot( // 2) .createRoot() receives the DOM element as the first argument and creates a root for it. 
  document.getElementById('app') //1)document.getElementById('app') returns a DOM element from index.html. 
).render(<App />); // 3) .createRoot() returns a reference to the root container on which you can call methods like .render().


// ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);
// First, we call the createRoot method to create a React root container for displaying 
//content. React applications typically have a single root DOM node, 
//and everything inside it is managed by React DOM.

// In other words, we give createRoot a DOM element to render in,
// and React will take over managing the DOM inside it. 

// recap
// React applications are made up of components.
// Components are responsible for rendering pieces of the user interface.
// To create components and render them, react and reactDOM must be imported.
// React components can be defined with Javascript functions to make function components.
// Function component names must start with a capitalized letter, and Pascal case is the adopted naming convention.
// Function components must return some React elements in JSX syntax.
// React components can be exported and imported from file to file.
// A React component can be used by calling the component name in an HTML-like self-closing tag syntax.
// Rendering a React component requires using .createRoot() to specify a root container and calling the .render() method on it.
