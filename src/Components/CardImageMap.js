import React from 'react'
import imagesPool from './imagesPool';

const CardImageMap = () => {
   return (
       <div>
         {imagesPool.map(({id, src, title, description})=>
         {
          <img key={id} src={src} title={title} alt={description} />
         })}

     </div>
)};

export default CardImageMap;