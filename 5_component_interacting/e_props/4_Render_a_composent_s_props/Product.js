import React from 'react';

//Product component that accepts props in the function definition
function Product(props) {
  return (
    <div>
        {/* display the name of the product in the <h1></h1> tag by injecting the name value from props */}
      <h1>{props.name}</h1> 
      {/* For the <h2></h2> tag, inject the price value from props. */}
      <h2>{props.price}</h2>
      {/* Finish it off by injecting the rating value from props within the <h3></h3> tags. */}
      <h3>{props.rating}</h3>
    </div>   
  );
}

export default Product;
