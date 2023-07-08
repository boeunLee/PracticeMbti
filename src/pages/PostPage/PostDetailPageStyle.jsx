import styled, { css } from "styled-components";
import { ReactComponent as Heart } from "../../images/icon-heart.svg";

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

const ResponseHeader = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  margin-top: 30px;
  padding-bottom: 30px;
  display: flex;
  li {
    list-style: none;
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:last-child {
      margin-left: auto;
    }
  }
  img {
    width: 35px;
    &:last-child {
      width: 25px;
    }
  }
  span {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.gray200};
    vertical-align: middle;
  }
`;

const MoreComment = styled.button`
  margin: 30px 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray200};
`;

const HeartButton = styled.button`
  width: 35px;
  height: 35px;
  padding: 0;
`;

const StyledHeart = styled(Heart)`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.isHearted
      ? css`
          path {
            stroke: ${({ theme }) => theme.colors.mainCoral};
            fill: ${({ theme }) => theme.colors.mainCoral};
          }
        `
      : Heart};
`;

export {
  PostDetailBox,
  ContextBox,
  ResponseHeader,
  MoreComment,
  StyledHeart,
  HeartButton,
};
