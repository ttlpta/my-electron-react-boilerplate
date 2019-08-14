import React from "react";
import { Link } from "react-router-dom";

import { ItemContainer } from "./TagStyle";

export default function Tag({item}) {
  
  return (
    <Link to={`/${item.path}`}>
      <ItemContainer bg={item.bg}>
        {item.name}
      </ItemContainer>
    </Link>
  );
}