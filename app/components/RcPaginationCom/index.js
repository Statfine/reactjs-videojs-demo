
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import RcPagination from 'rc-pagination';
import './index.css';

const PaginationContent = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
`;

const InputContent = styled.div`
  margin-left: 16px;
  height: 28px;
  line-height: 28px;
`;

const InputNumber = styled.input`
  margin: 0 8px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  outline: none;
  padding: 3px 12px;
  width: 50px;
  height: 28px;
`;

export default class RcPaginationCom extends PureComponent {

  state = {
    page: this.props.pagination.current,
  }

  componentWillReceiveProps(nextProps) {
    const { pagination: { current } } = nextProps;
    if (current !== this.props.pagination.current) {
      this.setState({ page: current });
    }
  }

  handleEnter = () => {
    const { onPaginationChange } = this.props;
    const { page } = this.state;
    onPaginationChange({ current: page });
  }

  render() {
    const { pagination, pageSize, onPaginationChange, className } = this.props;
    const { page } = this.state;
    return (
      <PaginationContent className={className}>
        <InputContent>
          跳至
          <InputNumber
            value={page}
            onChange={(e) => this.setState({ page: e.target.value })}
            onKeyDown={(e) => {
              if (e.keyCode === 13) this.handleEnter();
            }}
          />
          页
        </InputContent>
        <RcPagination
          pageSize={pageSize}
          current={Number(pagination.current)}
          onChange={(v) => { onPaginationChange({ current: v }); }}
          total={pagination.total}
        />
      </PaginationContent>
    );
  }
}

RcPaginationCom.propTypes = {
  className: PropTypes.string,
  pageSize: PropTypes.number,
  pagination: PropTypes.object,
  onPaginationChange: PropTypes.func,
};
