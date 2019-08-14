// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import { HomeContainer } from './HomeStyle';
import { Tag } from "../../components";
import { CATEGORIES } from "../../constants/data";

export default function Home(props) {

  return (
    <HomeContainer> 
      {
        CATEGORIES.map( (cat, idx) => {
          return (
            <Tag key={idx} item={cat} />
          )
        })
      }
    </HomeContainer>
  )
}