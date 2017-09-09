reactjs videojs 实现的mp4, m3u8, rtmp, flv 视频播放，包括全景视频和全景直播
<br />
videojs
videojs-contrib-hls m3u8直播
videojs-flash  flc  rtmp
pannellum 全景
<br />
坑记录
 videojs 版本升级到6之后 本身不包含flash了，所以在需要用到flash（flv， trmp）播放的时候需要引入videojs-flash
 配置：  html可以直接引入，不需要配置什么，
 videojs-contrib-hls 还不支持webpack所以需要特殊处理

new webpack.ProvidePlugin({
    videojs: 'video.js',
    'window.videojs': 'video.js',
}),
<br />
new webpack.DefinePlugin({
    'process.env': {
        'typeof global': JSON.stringify('undefined'),
    },
),
<br />
alias: {
    'video.js$': 'video.js/dist/video.cjs.js',
    'videojs-contrib-hls': 'videojs-contrib-hls/dist/videojs-contrib-hls',
},
<br />
<br />
<br />
npm install
<br />
npm start
<br />
http://localhost:9999/home
