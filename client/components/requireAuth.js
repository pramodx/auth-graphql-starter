import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from './../queries/current_user';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentDidUpdate() {
      const { user, loading } = this.props.data;
      if (!loading && !user) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(currentUserQuery)(RequireAuth);
};
