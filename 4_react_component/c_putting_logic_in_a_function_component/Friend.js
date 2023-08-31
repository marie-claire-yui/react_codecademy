import React from 'react';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New function component starts here:
function Friend() {
    let friend = friends[0];
  	return (
    	<div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
    	</div>
  	);
}

export default Friend;



//good example
// function RandomNumber() {
//     //First, some logic that must happen before returning
//     const n = Math.floor(Math.random() * 10 + 1);
//     //Next, a return statement using that logic: 
//     return <h1>{n}</h1>
//   }
//mistake
// function RandomNumber() {
//     return (
//       const n = Math.floor(Math.random() * 10 + 1);
//       <h1>{n}</h1>
//     )
//   }