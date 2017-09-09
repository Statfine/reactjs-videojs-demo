import React, { PureComponent, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styled from 'styled-components';
const CircularContent = styled.div`
  text-align: center;
  padding: 25px 0;
`;

class CircularGress extends PureComponent {
  render() {
    const { className, size } = this.props;
    return (
      <CircularContent className={className}>
        <CircularProgress size={size || 48} />
      </CircularContent>
    );
  }
}

CircularGress.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

export default CircularGress;
