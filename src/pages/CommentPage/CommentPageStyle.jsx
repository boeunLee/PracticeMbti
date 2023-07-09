import styled, { css } from "styled-components";
import { ReactComponent as Heart } from "../../images/icon-heart.svg";

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

const StyledHeart = styled(Heart)`
  ${(props) =>
    props.isHearted
      ? css`
          path {
            stroke: ${({ theme }) => theme.colors.mainCoral};
            fill: ${({ theme }) => theme.colors.mainCoral};
          }
        `
      : Heart}
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export { CommentWrapper, StyledHeart, InputWrapper };
