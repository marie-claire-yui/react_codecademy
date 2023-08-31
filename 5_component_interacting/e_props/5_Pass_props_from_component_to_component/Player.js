import React from 'react';
// 1)Ensure that Player can accept props by changing the function definition to include props in the parameter. 
function Player(props) {
  return (
    <>
    {/* 2)display the name of the song in the <h1></h1> tag by injecting the songName value from props. */}
      <h1>{props.songName}</h1>
      {/*3) Display the name of the artist in the <h2></h2> tag by injecting the artist value from props. */}
      <h2>{props.artist}</h2>
    </>
  );
}

export default Player; //4) Inside of Player.js, export the component to be used in App.js.

//pass a prop to Player from App
//Since App is passing props to Player, App is the parent and Player is the child. 
