/**
 * Created by sj on 2017/9/6.
 */
import React, { PureComponent } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import 'videojs-contrib-hls';
import 'videojs-flash';

export default class VideLivePage extends PureComponent {

  state = {
    showVideo: true,
  }

  componentDidMount() {
    this.playLive = new prismplayer({ // eslint-disable-line
      id: 'video', // 容器id
      autoplay: true,      // 自动播放
      source: 'http://wb-ali-pull.v.momocdn.com/momo/m_9187aa4c44de8d0015057117517401.flv?r=21ab6c616fa30875',         // 视频url 支持互联网可直接访问的视频地址
      width: '560px',       // 播放器宽度
      height: '316px',      // 播放器高度
    });


    /*
     * 此时用的是全局引入 并注释了webapck中的videojs
     * 若用npm包 需打开webapck中的videojs，
     *
     * type: 'video/x-flv'
     * RTMP can only be played with Flash
     */
    // rtmp video/*    5.19
    // videojs('exampleVideo').ready(function () { // eslint-disable-line
    //   const playerRtmp = this;
    //   playerRtmp.on('canplay', function () {
    //     playerRtmp.play();
    //   });
    //   playerRtmp.src({ src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks', type: 'video/*' });
    //   playerRtmp.on('ended', function () {
    //     alert('end');
    //   });
    // });
    // videojs('exampleVideo', {
    //   flash: {
    //     swf: 'https://cdn.bootcss.com/videojs-swf/5.4.1/video-js.swf',
    //   },
    // }).ready(function () { // eslint-disable-line
    //   const playerRtmp = this;
    //   playerRtmp.on('canplay', function () {
    //     playerRtmp.play();
    //   });
    //   playerRtmp.src({ src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks', type: 'rtmp/flv' });
    //   playerRtmp.on('ended', function () {
    //     alert('end');
    //   });
    // });
    this.playerRtmp = videojs('exampleVideo', {
      techOrder: ['flash', 'html5'],
      controls: true,
      autoplay: true,
      preload: 'metadata',
      sources: [{
        src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks',
        type: 'rtmp/flv',
      }],
      height: 300,
      width: 300,
      poster: 'https://s3-sa-east-1.amazonaws.com/v2share-s3/logo-v2tech.jpg',
    });
    this.playerRtmp.load();
    this.playerRtmp.play();
    this.setVidelHls();
  }

  componentWillUnmount() {
    this.playerRtmp.pause();
    this.playerRtmp.dispose();
    this.playerRtmp = undefined;
    this.player.pause();
    this.player.dispose();
    this.player = undefined;
  }

  setVidelHls = () => {
    // http://121.196.234.120/records/0f66c605-0fdc-490f-81e6-b350dde772fc/b1e4345b-8ba8-4f5f-ba99-a49e5287f714.m3u8
    // http://rm03.wscdn.hls.xiaoka.tv/live/srYpykdxcmhj0cTr/playlist.m3u8
    // https://example.com/index.m3u8
    // http://alcdn.hls.xiaoka.tv/2017426/12a/a4c/AVSu3LBrAtc4FOQH/index.m3u8
    this.player = videojs('phonelivevideo', { controls: true }); // eslint-disable-line
    this.player.src({
      src: 'http://alcdn.hls.xiaoka.tv/2017426/12a/a4c/AVSu3LBrAtc4FOQH/index.m3u8',
      type: 'application/x-mpegURL',
      // withCredentials: true,
    });
    this.player.load();
    this.player.play();
  }

  getH = () => {
    const video = document.getElementById('phonelivevideo');
    const a = this.player.el();
    console.log(video.videoWidth);
    console.log(a);
    alert(this.player.readyState());
    // alert(this.player.networkState());
    this.playerRtmp.play();
    document.getElementById('exampleVideo_Flash_api').click();
  }

  hideVideo = () => {
    this.player.pause();
    this.player.dispose();
    this.player = undefined;
  }

  render() {
    const { showVideo } = this.state;
    return (
      <div>
        <div id="video"></div>
        { showVideo && <div onClick={() => this.hideVideo()}>hideVideo</div>}
        {
          showVideo ?
            <video id="phonelivevideo" width="240" height="180" className="video-js vjs-default-skin" controls />
            : <p>Hello</p>
        }
        <video id="exampleVideo" width="240" height="180" className="video-js vjs-default-skin" controls />
        <div onClick={() => this.getH()}>get</div>
      </div>
    );
  }
}
