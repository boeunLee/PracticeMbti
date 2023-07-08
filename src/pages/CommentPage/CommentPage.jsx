import { React, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Heart } from "../../images/icon-heart.svg";
import BottomInput from "../../components/common/Input/BottomInput";
import { comment } from "../../mock/mockData";
import UserSimpleName from "../../components/common/UserSimpleInfo/UserSimpleName";

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

export default function CommentPage({ show }) {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  const handleHeart = () => {
    if (!isHearted) {
      setHeartCount((prev) => prev + 1);
    } else {
      setHeartCount((prev) => prev - 1);
    }
    setIsHearted((prev) => !prev);
  };

  const getStyledMbti = (mbti) => {
    if (mbti.includes("N")) {
      if (mbti.includes("F")) {
        return "NF";
      } else if (mbti.includes("T")) {
        return "NT";
      }
    } else if (mbti.includes("S")) {
      if (mbti.includes("J")) {
        return "SJ";
      } else if (mbti.includes("P")) {
        return "SP";
      }
    }
  };
  return (
    <>
      <CommentWrapper>
        {comment.map(
          (comment, index) =>
            (!show || index < 2) && (
              <li key={comment.id}>
                <UserSimpleName
                  color={getStyledMbti(comment.userMbti)}
                  userMbti={comment.userMbti}
                  username={comment.username}
                />
                <p>{comment.message}</p>
                <button type="button" aria-label="하트" onClick={handleHeart}>
                  <StyledHeart isHearted={isHearted} />
                </button>
                <span>{heartCount}</span>
              </li>
            )
        )}
        <InputWrapper>
          <BottomInput />
        </InputWrapper>
      </CommentWrapper>
    </>
  );
}
