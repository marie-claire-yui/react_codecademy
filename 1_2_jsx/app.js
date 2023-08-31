const h1 = <h1>Hello world</h1>; 

// this is a JavaScript file
// the code does not contain HTML at all
// it is JSX javascript experience

//JSX is a syntax extension for JavaScript. It was written to be used with React.
// JSX code looks a lot like HTML.

//JSX is not valid JavaScript. Web browsers can’t read it!

// If a JavaScript file contains JSX code, then that file will have to be compiled.
//  This means that before the file reaches a web browser,
//  a JSX compiler will translate any JSX into regular JavaScript. 

//JSX elements are treated as JavaScript expressions. 
//They can go anywhere that JavaScript expressions can go. 
//This means that a JSX element can be saved in a variable, passed to a function, 
//stored in an object or array… you name it.

//example of a JSX element being saved in a variable:
const navBar = <nav>I am a nav bar</nav>;

// example of several JSX elements being stored in an object:
const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };

  //Create a JSX <article> element. Save it in a variable named myArticle. 
  const myArticle = <article></article>;


  //Attributes In JSX
//   syntax: a name, followed by an equals sign, followed by a value wrapped in quotes

//   Here are some JSX elements with attributes:
<a href='http://www.example.com'>Welcome to the Web</a>;
const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
// JSX element can have many attributes, just like in HTML:
// const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px'>;


//Give the <p> stored in p1 an id attribute of 'large'.
//Give the <p> stored in p2 an id attribute of 'small'.
const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;


//Nested JSX
//You can nest JSX elements inside of other JSX elements, just like in HTML.
//example
<a href="https://www.example.com"><h1>Click me!</h1></a>
//If a JSX expression takes up more than one line, then you must wrap the multi-line JSX
// expression in parentheses. 
(
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  )
  //nested JSX expression being saved as a variable: 
  const theExample = (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  );


  //JSX Outer Elements
  // a JSX expression must have exactly one outermost element.
  //In other words, this code will work:
  const paragraphs = (
    <div id="i-am-the-outermost-element">
      <p>I am a paragraph.</p>
      <p>I, too, am a paragraph.</p>
    </div>
  );
// But this code will not work:
// const paragraphsnotworking = (
//     <p>I am a paragraph.</p> 
//     <p>I, too, am a paragraph.</p>
//   );

//Rendering JSX
// To render a JSX expression means to make it appear on screen. 

import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app');
    //Uses the document object which represents our web page.
    //Uses the getElementById() method of document to get the Element object
    // representing the HTML element with the passed in id (app).
    // Stores the element in container.
const root = createRoot(container);
    // we use createRoot() from the react-dom/client library,
    // which creates a React root from container and stores it in root. 
    //root can be used to render a JSX expression. 
    //This is the “where to place the content” part of React rendering. 
root.render(<h1>Hello world</h1>);
    //uses the render() method of root to render the content passed in as an argument.
    // Here we pass an <h1> element, which displays Hello world. 
    //This is the “what content to render” part of React rendering. 

//In this example, we save a JSX expression as a variable named toDoList. We then pass toDoList as the argument of render():
// const toDoList = (
//     <ol>
//       <li>Learn React</li>
//       <li>Become a Developer</li>
//     </ol>
//   );
  
//   const container = document.getElementById('app');
//   const root = createRoot(container);
//   root.render(toDoList);



//The Virtual DOM
//render() method only updates DOM elements that have changed.
// if you render the exact same thing twice in a row, the second render will do nothing:
const hello = <h1>Hello world</h1>;
// This will add "Hello world" to the screen:
root.render(hello, document.getElementById('app'));
// This won't do anything at all:
root.render(hello, document.getElementById('app'));


// Review

// Congratulations! You’ve learned to create and render JSX elements! This is the first step toward becoming fluent in React.

// In this lesson, we learned that:

//     React is a modular, scalable, flexible, and popular front-end framework.
//     JSX is a syntax extension for JavaScript which allows us to treat HTML as expressions.
//         They can be stored in variables, objects, arrays, and more!
//     JSX elements can have attributes and be nested within each other, just like in HTML.
//     JSX must have exactly one outer element, and other elements can be nested inside.
//     createRoot() from react-dom/client can be used to create a React root at the specified DOM element.
//     A React root’s render() method can be used to render JSX on the screen.
//     A React root’s render() method only updates DOM elements that have changed using the virtual DOM.

// As you continue to learn more about React, you’ll learn some powerful things you can do with JSX, some common JSX issues, and how to avoid them.




//Advanced JSX 


//class (html) vs className (JSX)

// In JSX, you can’t use the word class! You have to use className instead:
// This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
// When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
<h1 className="big">Title</h1>

// example
import React from 'react';
import { createRoot } from 'react-dom/client'
const container2 = document.getElementById('app');
const root2 = createRoot(container2);
// Write code here:
const myDiv = <div className="big">I AM A BIG DIV</div>
root2.render(myDiv) //call root.render() with myDiv as an argument.
// If your rendered <div> element has a class of "big", then it should look big in the browser!


//Self-Closing Tags
// = single-tag element not an opening tag or a closing tag
// // Fine in JSX:
// <br/> yo
// // NOT FINE AT ALL in JSX:
// <br>
// example
const profile = (
    <div>
      <h1>John Smith</h1>
      <img src="images/john.png" />
      <article>
        My name is John Smith.
        <br />
        I am a software developer.
        <br />
        I specialize in creating React applications.
      </article>
    </div>
  );



//JavaScript In Your JSX In Your JavaScript
import React from 'react';
import { createRoot } from 'react-dom/client';
const container3 = document.getElementById('app');
const root3 = createRoot(container3);
// Write code here:
root3.render(<h1>2 + 3</h1>);
// 2 + 3 appears in the browser
//Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! 
//JSX doesn’t add numbers—it reads them as text, just like HTML.

// Curly Braces in JSX
import React from 'react';
import { createRoot } from 'react-dom/client';

const container4 = document.getElementById('app');
const root4 = createRoot(container4);
// Write code here:
root4.render(<h1>{2 + 3}</h1>); // 5 appears in the browser
//Everything inside of the curly braces will be treated as regular JavaScript.
// They are markers that signal the beginning and end of a JavaScript injection into JSX
// similar to the quotation marks that signal the boundaries of a string.

// 20 Digits of Pi in JSX
import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);


// Variables in JSX

// When you inject JavaScript into JSX, 
// that JavaScript is part of the same environment as the rest of the JavaScript in your file.
// That means that you can access variables while inside of a JSX expression,
//  even if those variables were declared outside of the JSX code block.
// Declare a variable:
const name = 'Gerdo';
// Access your variable inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

//Variable Attributes in JSX
//When writing JSX, it’s common to use variables to set attributes.
// example
const sideLength = "200px";
const pandaa = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

//Object properties are also often used to set attributes: 
const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
  }; 
  
  const panda = (
    <img 
      src={pics.panda} 
      alt="Lazy Panda" />
  );
  
  const owl = (
    <img 
      src={pics.owl} 
      alt="Unimpressed Owl" />
  );
  
  const owlCat = (
    <img 
      src={pics.owlCat} 
      alt="Ghastly Abomination" />
  ); 

  // example 2

  import React from 'react';
import { createRoot } from 'react-dom/client';

const container5 = document.getElementById('app');
const root5 = createRoot(container5);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
const gooseImg = <img src={goose}/> //Set the attribute’s value equal to the variable goose.
root5.render(gooseImg) //Use root.render() to render gooseImg.

//Event Listeners in JSX
// JSX elements can have event listeners, just like HTML elements can.
// You create an event listener by giving a JSX element a special attribute. Here’s an example:
<img onClick={clickAlert} />
// An event listener attribute’s name should be something like onClick or onMouseOver:
// the word on plus the type of event that you’re listening for.
// An event listener attribute’s value should be a function. 
//The above example would only work if clickAlert were a valid function that had been defined elsewhere:
function clickAlert() {
    alert('You clicked this image!');
  }
  <img onClick={clickAlert} />
//Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover.
// In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.


// example
import React from 'react';
import { createRoot } from 'react-dom/client';

const container6 = document.getElementById('app');
const root6 = createRoot(container6);
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick ={makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

root6.render(kitty);

// affiche l'image d'un chat mais lorsqu'on clique dessus affiche l'image d'un chien

// JSX Conditionals: If Statements That Don't Work
//  use curly braces to inject JavaScript into a JSX expression!
// you can not inject an if statement into a JSX expression.
// One option is to write an if statement and not inject it into JSX.
// example
import React from 'react';
import { createRoot } from 'react-dom/client';

const container7 = document.getElementById('app');
const root7 = createRoot(container7);
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

root7.render(message);

// example 2

import React from 'react';
import { createRoot } from 'react-dom/client';

const container8 = document.getElementById('app');
const root8 = createRoot(container8);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics2 = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}

root8.render(img);

// JSX Conditionals: The Ternary Operator
// x ? y : z
// If x is truthy, then the entire ternary operator returns y.
// If x is falsy, then the entire ternary operator returns z.
// example
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

// JSX Conditionals: &&
import React from 'react';
import { createRoot } from 'react-dom/client';

const container9 = document.getElementById('app');
const root9 = createRoot(container9);
// judgmental will be true half the time.
// If the expression on the left of the && evaluates as true, 
//then the JSX on the right of the && will be rendered. 
//If the first expression is false, however,
// then the JSX to the right of the && will be ignored and not rendered.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root9.render(favoriteFoods);


// .map in JSX
// example
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>
// we start out with an array of strings. We call .map() on this array of strings, 
//and the .map() call returns a new array of <li>s.
//On the last line of the example, note that {listItems} will evaluate to an array, because it’s the returned value of .map()!


// // This is fine in JSX, not in an explicit array:
// <ul>
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
// </ul>

// // This is also fine!
// const liArray = [
//   <li>item 1</li>, 
//   <li>item 2</li>, 
//   <li>item 3</li>
// ];

// <ul>{liArray}</ul>


//Keys
// When you make a list in JSX, sometimes your list will need to include something called keys:

{/* <ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul> */}

// A key is a JSX attribute. The attribute’s name is key. 
// The attribute’s value should be something unique, similar to an id attribute.
// keys don’t do anything visible! 
//  React uses them internally to keep track of lists. If you don’t use keys when you’re supposed to, 
//React might accidentally scramble your list items into the wrong order.

// Not all lists need to have keys. A list needs keys if either of the following is true:

//     The list items have memory from one render to the next. 
//For instance, when a to-do list renders, each item must “remember” whether it was checked off. 
//The items shouldn’t get amnesia when they render.
//     A list’s order might be shuffled. 
//For instance, a list of search results might be shuffled from one render to the next.

// If neither of these conditions is true, then you don’t have to worry about keys.
// If you aren’t sure, then it never hurts to use them!