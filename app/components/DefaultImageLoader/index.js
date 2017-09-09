/**
 * Created by easub on 16/10/20.
 */
import React, { Component, PropTypes } from 'react';
import { isEmpty } from 'lodash';

export default class LoadImage extends Component {

  state = { imageStatus: true };

  handleImageErrored = () => {
    this.setState({ imageStatus: false });
  };

  render() {
    const { imgSrc, defaultSrc, className, style } = this.props;
    const { imageStatus } = this.state;
    let src = `${imgSrc}`;
    if (isEmpty(imgSrc)) {
      src = defaultSrc;
    }

    return (
      <img
        className={className}
        style={style}
        src={imageStatus ? src : defaultSrc}
        onError={this.handleImageErrored} alt="img"
      />
    );
  }

}

LoadImage.propTypes = {
  imgSrc: PropTypes.string,
  defaultSrc: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
