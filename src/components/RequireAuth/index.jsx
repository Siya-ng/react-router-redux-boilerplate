import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    static contextTypes = {
      router: PropTypes.shape().isRequired,
    }

    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
    }

    componentWillMount() {
      if (this.props.isAuthenticated) {
        this.context.router.history.push('/signin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
  });

  return connect(mapStateToProps)(Authenticate);
}
