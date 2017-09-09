import styled from 'styled-components';

export const PromptContainer = styled.div`
  width: 600px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 50%;
  color: #FFF;
  margin-left: -300px;
  background-color: #FFF;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  z-index: 10000;
  overflow: hidden;
`;

export const Img = styled.img`
  margin-right: 15px;
  line-height: 50px;
  width: 24px;
  height: 24px;
  margin-top: -2px;
`;
