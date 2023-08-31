import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1>{titleText}</h1>
      {/* You can see two list titles in the browser Favourite Living Musicians */}
      <ul>{props.children}</ul> 
      {/*  make the list items appear Favorite Living Cat Musician*/}
        {/* Sachiko M Harvez Sid Fisher
        
        Nora the Piano Cat*/}
      
    </div>
  );
}

export default List;