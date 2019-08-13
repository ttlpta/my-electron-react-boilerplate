// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

type Props = {};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    return (
      <h2>Counter</h2>
    );
  }
}
