/**
 * Created by sj on 2017/9/6.
 */
import React, { PureComponent } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import 'pannellum';
import 'pannellum/src/css/pannellum.css';
import 'pannellum/utils/video/videojs-pannellum-plugin';

export default class VideoVrPage extends PureComponent {
  componentDidMount() {
    this.player = videojs('panorama', { // eslint-disable-line
      plugins: {
        pannellum: {},
      },
    });
    this.player.play();
  }

  componentWillUnmount() {
    this.player.pause();
    this.player.dispose();
    this.player = undefined;
  }

  render() {
    // https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/9f4151a2-d4ab-4c93-a405-873b106ccd8b.mp4 普通
    // https://cloud-clip-out2.oss-cn-shanghai.aliyuncs.com/vod-out/hd/8c593447-c54e-4829-840b-71b8a41d0bf2.mp4 全景
    return (
      <div>
        <video
          id="panorama"
          className="video-js vjs-default-skin vjs-big-play-centered"
          controls
          style={{ width: 960, height: 480 }}
          preload="none"
          crossOrigin="anonymous"
        >
          <source src="https://cloud-clip-out2.oss-cn-shanghai.aliyuncs.com/vod-out/hd/8c593447-c54e-4829-840b-71b8a41d0bf2.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}
