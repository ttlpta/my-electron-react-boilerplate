// @flow
import React, { Component } from 'react';
import Routes from './Routes';

type Props = {
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    return (
      <Routes />
    );
  }
}
