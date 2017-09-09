/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-width: 1280px;
  min-height: 720px;
  background: #fff;
`;

const TriangleTopLetf = styled.div`
  width:0;
  height:0;
  border-width: ${({ w, h }) => `0 0 ${h}px ${w * 0.6}px`};
  border-style:solid;
  border-color:transparent transparent transparent #4885ed;
  position:relative;
  z-index: 1;
`;

const ATest = styled.div`
  width: 200px;
  height: 2px;
  background: red;
  z-index: 99;
  position: absolute;
  top: 100px;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  display: none;
`;

const ImageLink = styled.img`
  width: ${({ w }) => `${w * 0.3}px`};
  height: auto;
  position: absolute;
  z-index: 100;
  transform: ${({ rotate }) => `rotate(${45 + rotate}deg)`};
  left: 30%;
  margin-left: ${({ w }) => `-${w * 0.15}px`};
  top: 50%;
  margin-top: ${({ w }) => `-${w * 0.15}px`};
`;

const RightContent = styled.div`
  width: 30%;
  position: absolute;
  top: 28%;
  right: 11%;
  font-size: ${() => document.body.clientWidth < 1280 ? '14px' : `${(document.body.clientWidth / 1280) * 14}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    text-align: center;
  }
`;

const Black = styled.p`
  font-size: 3em;
  color: #025483;
  margin-top: 5%;
`;

const Hint = styled.p`
  color: #999;
  font-size: 1.4em;
  margin-top: 1%;
`;

const BackBtn = styled.div`
  margin: 2% 24% 0 24%;
  border: 2px solid #4885ed;
  border-radius: 6px;
  color: #4885ed;
  height: ${({ h }) => `${h * 0.07}px`};
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  cursor: pointer;
  > p {
    text-align: center;
  }
`;

const BackNumber = styled.span`
  color: #4885ed;
  font-size: 1.5em;
`;

class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    wHeight: 0,
    wWidth: 0,
    backward: 5,
  }

  componentWillMount() {
    this.onWindowResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.handleStartInterval();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    clearInterval(this.intervalTime);
  }

  onWindowResize = () => {
    const h = document.documentElement.clientHeight > 720 ? document.documentElement.clientHeight : 720;
    const w = document.documentElement.clientWidth > 1280 ? document.documentElement.clientWidth : 1280;
    this.setState({ wHeight: h, wWidth: w });
  }

  getAngle = (x1, y1, x2, y2) => {
    // 直角的边长
    const x = Math.abs(x1 - x2);
    const y = Math.abs(y1 - y2);
    // 斜边长
    const z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); // eslint-disable-line no-restricted-properties
    // 余弦
    const cos = y / z;
    // 弧度
    const radina = Math.acos(cos);
    // 角度
    const angle = 180 / (Math.PI / radina);
    return angle;
  }

  handleStartInterval = () => {
    this.setState({ backward: 5 }, () => {
      this.intervalTime = setInterval(() => {
        const backward = this.state.backward - 1;
        if (backward > -1) this.setState({ backward });
        else browserHistory.push('/');
      }, 1000);
    });
  }

  render() {
    const { wHeight, wWidth, backward } = this.state;
    const rate = this.getAngle(0, 0, wWidth * 0.6, wHeight);

    return (
      <Container>
        <Helmet title="404" />
        <TriangleTopLetf w={wWidth} h={wHeight} />
        <ATest rotate={-(90 - rate)} />
        <ImageLink w={wWidth} rotate={-(90 - rate)} src={'http://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/home/link_404.png'} />
        <RightContent>
          <img style={{ width: '100%', height: 'auto' }} src={'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/home/number_404.png'} alt="404" />
          <Black>页面黑洞出现了</Black>
          <Hint><BackNumber>{backward}</BackNumber>秒后页面自动跳转回首页</Hint>
          <Hint>或</Hint>
          <BackBtn h={wHeight} onClick={() => history.go(-1)}><p>返回上一页</p></BackBtn>
        </RightContent>
      </Container>
    );
  }
}

export default NotFound;
