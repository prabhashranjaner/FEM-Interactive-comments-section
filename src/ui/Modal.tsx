import styled from "styled-components";
import { GrayButton, PinkButton } from "../styles/sharedStyles";
import { createPortal } from "react-dom";
import type { Dispatch, SetStateAction } from "react";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: black;
  opacity: 70%;
  transition: all 0.3s;
`;

const ModalWrapper = styled.div`
  position: fixed;
  max-width: 400px;
  background-color: white;
  padding: 18px;
  z-index: 500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
`;

const Heading = styled.h4`
  color: var(--col-gray-4);
  font-size: 18px;
`;
const Content = styled.p`
  line-height: 22px;
  color: var(--col-gray-3);
`;

const ButtomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Modal = ({ handleYes, handleNo }: PropsType) => {
  return createPortal(
    <>
      <Overlay />
      <ModalWrapper>
        <Heading>Delete commnet</Heading>
        <Content>
          Are you sure want to delete this comment? This will remove the comment
          and can't be undone
        </Content>
        <ButtomWrapper>
          <GrayButton onClick={() => handleNo(false)}>NO, CANCEL</GrayButton>
          <PinkButton onClick={handleYes}>YES,DELETE</PinkButton>
        </ButtomWrapper>
      </ModalWrapper>
    </>,
    document.body
  );
};

export default Modal;

type PropsType = {
  handleNo: Dispatch<SetStateAction<boolean>>;
  handleYes: () => void;
};
