import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RuleBox = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #fff;
`;

const RuleHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

const RuleTitle = styled.h3`
  font-size: 24px;
  color: #000;
`;

const IconBox = styled.div``;

const RuleContent = styled.div``;

export {
  Background,
  Content,
  RuleBox,
  RuleHeader,
  RuleTitle,
  IconBox,
  RuleContent,
};
