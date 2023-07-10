import styled from "styled-components";

const BottomInputWrapper = styled.div`
  width: 85%;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 20px;
`;

const BottomInputBox = styled(BottomInputWrapper)`
  width: 100%;
  padding: 10px 20px;
  input {
    margin-left: 3px;
    margin-top: 3px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray200};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
    &:focus {
      outline: none;
    }
  }
`;
const SubmitBtn = styled.button`
  margin-left: auto;
  width: 70px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  &::after {
    content: " ⬆️";
  }
`;
export { BottomInputWrapper, BottomInputBox, SubmitBtn };
