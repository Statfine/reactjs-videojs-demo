/**
 * Created by sj on 2017/9/6.
 */
import React, { PureComponent } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import 'videojs-contrib-hls';
import 'pannellum';
import 'pannellum/src/css/pannellum.css';
import 'pannellum/utils/video/videojs-pannellum-plugin';

export default class VideLivePage extends PureComponent {

  componentDidMount() {
    this.setVidelHls();
  }

  componentWillUnmount() {
    this.player.pause();
    this.player.dispose();
    this.player = undefined;
  }

  setVidelHls = () => {
    this.player = videojs('exampleVideo', { // eslint-disable-line
      plugins: {
        pannellum: {},
      },
    });
    // http://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/test.m3u8
    this.player.src({
      src: 'http://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/test.m3u8',
      type: 'application/x-mpegURL',
      // withCredentials: true,
    });
    this.player.play();
  }

  render() {
    return (
      <div>
        <video id="exampleVideo" width="960" height="480" className="video-js vjs-default-skin" controls crossOrigin="anonymous" />
      </div>
    );
  }
}
