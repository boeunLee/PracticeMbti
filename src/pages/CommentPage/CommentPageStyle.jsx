import styled from "styled-components";

const CommentWrapper = styled.ul`
  li {
    margin-bottom: 20px;
  }
  p {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
  img {
    width: 25px;
  }
  span {
    vertical-align: middle;
    margin-left: 5px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NewCommentWrapper = styled(CommentWrapper)``;

export { CommentWrapper, InputWrapper, NewCommentWrapper };
