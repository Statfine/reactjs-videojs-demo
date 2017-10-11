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
    });
    this.player.play();

    // How about an event listener?
    const This = this;
    this.player.on('ready', function () {
      videojs.log('Awww...ready');
      console.log(This.player);
    });
    this.player.on('error', function () {
      videojs.log('error');
    });
    this.player.on('ended', function () {
      videojs.log('Awww...over so soon?!');
    });
    this.player.on('seeking', function () {
      videojs.log('seeking');
    });
    this.player.on('timeupdate', function () {
      videojs.log(`timeupdate:==>${This.player.currentTime()}`);
    });
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
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="http://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
        <div onClick={() => console.log(this.player.duration())}>get duration</div>
        <div onClick={() => console.log(this.player.currentTime())}>get currentTime</div>
        <div onClick={() => this.player.currentTime(10)}>set currentTime 10</div>
      </div>
    );
  }
}
