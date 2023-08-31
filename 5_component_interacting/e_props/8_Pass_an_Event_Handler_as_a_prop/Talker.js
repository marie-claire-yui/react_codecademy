import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>; //pass talk() <Button />
} 
// 1) give <Button /> an attribute
// 2) prop name --> talk
// 3) value --> {talk} prop value should be the information that you want to pass 
// In this case, you want to pass the method named talk().

export default Talker;