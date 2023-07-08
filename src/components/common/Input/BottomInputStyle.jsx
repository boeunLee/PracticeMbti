import styled from "styled-components";

const BottomInputWrapper = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 20px;
`;

const BottomInputBox = styled(BottomInputWrapper)`
  padding: 10px 20px;
  input {
    margin-left: 3px;
    margin-top: 3px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray200};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
    &:focus {
      outline: none;
    }
  }
`;
export { BottomInputWrapper, BottomInputBox };
