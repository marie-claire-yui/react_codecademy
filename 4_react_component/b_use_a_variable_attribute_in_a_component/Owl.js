import React from 'react';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};


//Let’s create our component.

// In Owl.js, declare a new function component named Owl.
// Owl should return an empty <div></div>. 
function Owl() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img 
      		src = {owl.src}
  				alt = {owl.title} />
      </div>
    );
}

export default Owl;
//Although you’re not done with the component, 
//export it so that you can see your progress being rendered in the browser window as you work.
// At the bottom of the Owl.js file, default export your Owl component.
