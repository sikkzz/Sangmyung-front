import React from "react";
import styled from "styled-components";

type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => {
  return (
    <Background>
      <Content></Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 500;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.8);
`;
