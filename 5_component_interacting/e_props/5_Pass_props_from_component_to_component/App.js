import React from 'react';
import Player from './Player'; //5) Import the Player component in App.js.

function App() {
  return (
    <Player songName="Let's Go to the Mall" artist="Robin Sparkles" />
    //6) call the Player component with the attributes songName, giving it a string of your favorite song, and the artist of the song. 
  );
}

export default App;
