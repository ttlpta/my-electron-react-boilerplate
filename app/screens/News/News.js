import React, { useEffect } from 'react';

import { NewContainer } from "./NewsStyle";
import { SUBCATEGORIES } from "../../constants/data";
import { Tag } from "../../components";

export default function News({ match }) {
  
  const news = SUBCATEGORIES.filter( i => i.parent == 'news' );
  
  if(match.params.cat != undefined) {
    return (
      <div>{match.params.cat}</div>
    )
  }

  return (
    <NewContainer>
      {
        news[0].item.map( (n , idx) => (
          <Tag item={n} key={idx}/>
        ))
      }
    </NewContainer>
  );
}