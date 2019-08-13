// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';
import { HomeContainer, ItemContainer } from './HomeStyle.js';
import { CATEGORIES } from "../../constants/data";

export default function Home(props) {

  return (
    <HomeContainer> 
      {
        CATEGORIES.map( (cat, idx) => {
          return (
            <ItemContainer bg={cat.bg}>
              <Link to={`/${cat.path}`}>{cat.name}</Link>
            </ItemContainer>
          )
        })
      }
    </HomeContainer>
  )
}