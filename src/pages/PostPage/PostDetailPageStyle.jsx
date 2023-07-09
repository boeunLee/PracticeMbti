import styled from "styled-components";

const PostDetailBox = styled.section`
  margin-top: 50px;
`;

const ContextBox = styled.p`
  margin-top: 30px;
  p {
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 40px;
    margin-bottom: 20px;
  }
`;

const MoreComment = styled.button`
  margin: 30px 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray200};
`;

export { PostDetailBox, ContextBox, MoreComment };
