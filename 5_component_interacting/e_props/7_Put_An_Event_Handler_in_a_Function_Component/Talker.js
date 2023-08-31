import React from 'react';
import Button from './Button';


// talk() is a method defined inside the Talker component
function Talker() {
  function talk() {
  let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}
  return <Button />;
}

export default Talker;