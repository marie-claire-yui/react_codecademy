// importing useState from the React library. 
import React, { useState } from "react";

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  const [phone, setPhone] = useState('');
//   Declare and assign values for our current state and state setter with useState(). Use phone as the name of our current state variable.
// Make sure to give the phone state variable an initial value of an empty string!

  
   const handleChange = ({ target })=> {
     const newPhone = target.value;
     const isValid = validPhoneNumber.test(newPhone);
     if (isValid) {
       setPhone(newPhone);
     }
     // just ignore the event, when new value is 
//      Lastly, complete the handleChange() function. This function checks for the validity of the input value the user is typing. If the input is numeric, it should update the state variable through the setter function.
// In the if-statement of the handleChange() function, update the state using the state setter function setPhone() and set it to the new value newPhone.

    };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />
    </div> 
//Let’s specify the value of our JSX input tag by adding a value attribute and setting it to the value of our phone state variable.
// We also want to detect any changes to the input tag while the user types so add an onChange event listener and assign it the handleChange function.

  );
}
