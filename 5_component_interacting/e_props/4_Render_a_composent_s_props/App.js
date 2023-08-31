// App.js contains the top-level App component, which calls the Product component 
//with three pieces of information: name, price, and rating. 

import React from 'react';
import Product from './Product'

function App() {
  return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}

export default App;

// In App.js, test out your code by tweaking the value of name, price, and rating.

// Click Run. Once the browser refreshes, new information about a product should appear on the screen.
