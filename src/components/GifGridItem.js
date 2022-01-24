import React from 'react';


export const GifGridItem = ({title,url}) => {

    
  return (
  <div className='root'>
      <div className='card-grid' className='card animate__animated animate__pulse'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
      </div>
  </div>

  );
};
