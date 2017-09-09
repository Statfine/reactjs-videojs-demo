import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import {
  PromptContainer,
  Img,
} from './StyledComponents';
import SucImg from './suc.png';
import ErrImg from './err.png';

class PromptMsg extends Component {   // eslint-disable-line   react/prefer-stateless-function
  state = {
    open: this.props.open,
    msg: this.props.msg,
    type: this.props.type,
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      msg: nextProps.msg,
      type: nextProps.type,
    });
    if (nextProps.open && nextProps.open !== this.props.open) {
      setTimeout(() => {
        this.props.onChangePromptInfo({ promptOpen: false, promptMsg: '', promptType: 0 });
      }, 3000);
    }
  }

  render() {
    return (
      <QueueAnim
        type={['top', 'bottom']}
        ease={['easeOutQuart', 'easeInOutQuart']}
        duration={300}
      >
        {
        this.state.open ?
          <PromptContainer
            style={{ backgroundColor: '#FAFAFA', color: this.state.type === 1 ? '#4885ed' : '#ed485b' }}
            key="ani1"
          >
            <Img src={this.state.type === 1 ? SucImg : ErrImg} alt="info" />
            {this.state.msg}
          </PromptContainer> :
          null
        }
      </QueueAnim>
    );
  }
}

PromptMsg.propTypes = {
  open: PropTypes.bool,
  msg: PropTypes.string,
  type: PropTypes.number,
  onChangePromptInfo: PropTypes.func,
};

export default PromptMsg;
