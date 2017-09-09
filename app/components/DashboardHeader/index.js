/**
 * 搜索结果页头部
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { selectUserInfo } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { DropDownMenu, MenuItem } from 'material-ui';
import { browserHistory } from 'react-router';
import { logout } from 'containers/App/actions';
import defaultAvatar from 'components/DefaultImageLoader/default_avatar.png';
import DefaultImageLoader from 'components/DefaultImageLoader';

const inlineStyle = {
  labelStyle: {
    color: '#fff',
    paddingLeft: '4px',
    paddingRight: '38px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '110px',
    letterSpacing: '1px',
  },
  underlineStyle: {
    border: 'none',
  },
  searchStyle: {
    marginRight: '5px',
  },
  authStyle: {
    display: 'none',
  },
  dropMenuStyle: {
    width: '120px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: '4px',
  },
  btnStyle: {
    width: '40px',
    height: '30px',
    backgroundColor: '#4a74d2',
  },
};

export const Header = styled.div`
  min-width:1220px;
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  padding: 0 28px;
  position: fixed;
  top: 0;
  z-index: 1000;
  clear:both;
  background-color: #4885ed;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12);
`;

const HeaderAuthBar = styled.div`
  color: #FFF;
  float: right;
`;

const AuthCover = styled(DefaultImageLoader)`
  vertical-align: middle;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const AuthAvatar = styled.div`
  width: 38px;
  display: inline-block;
  vertical-align:top;
`;

const SectionBox = styled.div`
  min-width: 650px;
  height:64px;
  float: right;
`;

const CenterText = styled.div`
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.p`
  height: 64px;
  line-height: 64px;
  float: left;
  cursor:pointer;
  font-size: 24px;
`;

class DashboardHeader extends PureComponent {

  handleChange() {
    this.props.onLogout();
  }
  // onLogout()
  render() {
    const { title } = this.props;
    const authInfo = this.props.userInfo;
    return (
      <Header>
        <Title>logo</Title>
        <CenterText>{title}</CenterText>
        <SectionBox>
          <HeaderAuthBar>
            <AuthAvatar onClick={() => browserHistory.push('/home')}>
              <AuthCover defaultSrc={defaultAvatar} imgSrc={authInfo.avatar} />
            </AuthAvatar>
            <DropDownMenu
              value={0}
              style={inlineStyle.dropMenuStyle}
              labelStyle={inlineStyle.labelStyle}
              underlineStyle={inlineStyle.underlineStyle}
              onChange={(e, k, v) => this.handleChange(e, k, v)}
            >
              <MenuItem
                value={0}
                primaryText={authInfo.name || authInfo.email || 'loading...'}
                style={inlineStyle.authStyle}
              />
              {
                authInfo.is_master === 0 && authInfo.reset_password === 1 && <MenuItem value={1} primaryText="修改密码" />
              }
              <MenuItem value={2} primaryText="退出" />
            </DropDownMenu>
          </HeaderAuthBar>
        </SectionBox>
      </Header>
    );
  }
}

DashboardHeader.propTypes = {
  userInfo: PropTypes.object,
  title: PropTypes.string,
  onLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userInfo: selectUserInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => { dispatch(logout()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
