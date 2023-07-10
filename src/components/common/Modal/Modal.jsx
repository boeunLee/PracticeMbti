import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  background-color: white;
  padding: 20px;
  border-radius: 4px;

  span {
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray200};
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 20px 0 25px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: 1px solid ${({ theme }) => theme.colors.gray100};
    width: 25px;
    height: 20px;
    margin-left: auto;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  height: calc(100% - 70px);
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  button {
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  button:nth-child(2) {
    color: ${({ theme }) => theme.colors.mainCoral};
    border-left: 1px solid ${({ theme }) => theme.colors.gray100};
  }
`;

export default function Modal({ isOpen, onClick, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <button onClick={onClick}>X</button>
        </ModalHeader>
        <span>삭제하시겠어요?</span>
        <ButtonBox>
          <button onClick={onClick}>삭제</button>
          <button onClick={onClick}>취소</button>
        </ButtonBox>
      </ModalContent>
    </ModalContainer>
  );
}
