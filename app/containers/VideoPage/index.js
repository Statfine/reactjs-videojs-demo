/**
 * Created by sj on 2017/9/6.
 */
import React, { PureComponent } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

export default class VidePage extends PureComponent {

  componentDidMount() {
    const options = {};
    this.player = videojs('my-player', options, function onPlayerReady() {
      videojs.log('Your player is ready!');

      // How about an event listener?
      this.on('ended', function () {
        videojs.log('Awww...over so soon?!');
      });
    });
    this.player.play();
  }

  componentWillUnmount() {
    this.player.pause();
    this.player.dispose();
    this.player = undefined;
  }

  render() {
    return (
      <div>
        <video
          id="my-player"
          className="video-js"
          controls
          preload="auto"
          poster="//vjs.zencdn.net/v/oceans.png"
          data-setup=""
        >
          <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
          <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
          <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="http://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
      </div>
    );
  }
}
