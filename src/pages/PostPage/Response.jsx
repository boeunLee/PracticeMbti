import { React, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Heart } from "../../images/icon-heart.svg";
import Comment from "../../images/icon-message.svg";
import More from "../../images/icon-more-small.svg";

const ResponseHeader = styled.ul`
  margin-top: 30px;
  display: flex;
  ${({ isComment, theme }) =>
    !isComment &&
    `
    border-bottom: 1px solid ${theme.colors.gray100};
    padding-bottom: 30px;
  `}
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
    /* 댓글 아이콘 */
    width: ${({ isComment }) => (isComment ? "0" : "35px")};
    /* 더보기 아이콘 */
    &:last-child {
      width: ${({ isComment }) => (isComment ? "20px" : "25px")};
    }
  }
  span {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.gray200};
    vertical-align: middle;
  }
`;

const HeartButton = styled.button`
  padding: 0;
  ${({ isComment }) =>
    isComment
      ? css`
          width: 25px;
          height: 25px;
        `
      : css`
          width: 35px;
          height: 35px;
        `}
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

export default function Response({ heartCnt, commentLen, isComment }) {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(heartCnt);

  const handleHeart = () => {
    if (!isHearted) {
      setHeartCount((prev) => prev + 1);
    } else {
      setHeartCount((prev) => prev - 1);
    }
    setIsHearted((prev) => !prev);
  };
  return (
    <ResponseHeader isComment={isComment}>
      <li>
        <HeartButton
          isComment={isComment}
          type="button"
          aria-label="하트"
          onClick={handleHeart}
        >
          <StyledHeart isHearted={isHearted} />
        </HeartButton>
        <span>{heartCount}</span>
      </li>
      <li>
        <img src={Comment} alt="댓글" />
        <span>{commentLen}</span>
      </li>
      <li>
        <img src={More} alt="더보기" />
      </li>
    </ResponseHeader>
  );
}
