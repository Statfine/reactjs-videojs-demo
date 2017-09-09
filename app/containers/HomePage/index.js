/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { browserHistory } from 'react-router';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  /*
   * https://github.com/videojs/video.js/blob/master/docs/guides/faq.md#q-how-can-i-play-rtmp-video-in-videojs
   *  video.js
   *  videojs-contrib-hls(http, m3u8)
   *  videojs-flash(flv rtmp)
   * videoJS >= 6 不包含videojs-flash package
   * rtmp/mp4 or rtmp/flv
   */
  render() {
    return (
      <div>
        <div onClick={() => browserHistory.push('/video')}>video</div>
        <div onClick={() => browserHistory.push('/videovr')}>videovr</div>
        <div onClick={() => browserHistory.push('/videolive')}>videolive</div>
        <div onClick={() => browserHistory.push('/videovrlive')}>videovrlive</div>
      </div>
    );
  }
}
