import React from 'react';

function Button(props) {
  
    return (
      <button>{props.text}</button>
    );
}
Button.defaultProps = {
  text: 'Default Text of Big Button', //In Button.js, give the text prop a default value. 
};


export default Button;


// What if nobody passes any text to Button?

// If nobody passes any text to Button, then Button‘s display will be blank. It would be better if Button could display a default message instead.

// You can make this happen by specifying a default value for the prop. 

// // first way
// function Example(props) {
//     return <h1>{props.text}</h1>
//   }
  
//   Example.defaultProps = {
//     text: 'This is default text',
//   };

// // second way
// function Example({text='This is default text'}) {
//     return <h1>{text}</h1>
//  }

// //third way
// function Example(props) {
//     const {text = 'This is default text'} = props;
//     return <h1>{text}</h1>
//   }
