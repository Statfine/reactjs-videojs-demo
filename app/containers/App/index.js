/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import PromptMsg from 'components/PromptMsg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userinfoRequest, changePromptInfo } from './actions';
import { selectLoggedIn, selectUserInfo, selectpromptInfo } from './selectors';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentDidMount() {
    if (this.props.loggedIn && this.props.userInfo.email.length === 0 && this.props.userInfo.name.length === 0) {
      this.props.requestUserInfo();
    }
  }

  render() {
    const { promptInfo, onChangePromptInfo } = this.props;
    const prompt = promptInfo.toJS();

    return (
      <div>
        <PromptMsg
          open={prompt.promptOpen}
          msg={prompt.promptMsg}
          type={prompt.promptType}
          onChangePromptInfo={onChangePromptInfo}
        />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  requestUserInfo: PropTypes.func,
  onChangePromptInfo: PropTypes.func,
  loggedIn: PropTypes.bool,
  userInfo: PropTypes.object,
  promptInfo: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
  userInfo: selectUserInfo(),
  promptInfo: selectpromptInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestUserInfo: () => dispatch(userinfoRequest()),
    onChangePromptInfo: (val) => dispatch(changePromptInfo(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
