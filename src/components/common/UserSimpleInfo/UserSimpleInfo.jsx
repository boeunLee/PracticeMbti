import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Comment from "../../../images/icon-message-small.svg";

const UserSimpleInfoWrapper = styled.div`
  width: 100%;
  > :not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray50};
  }
`;
const UserSimpleInfoBox = styled.div`
  display: flex;
  padding: 10px 0;
  span {
    margin-left: 10px;
    margin-right: auto;
    align-self: center;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const CommentBox = styled.div`
  display: flex;
  margin-left: auto;
  img {
    display: block;
    object-fit: cover;
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
  h3 {
    align-self: center;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 700;
  }
`;

export default function UserSimpleInfo({ mbti, title, commentLen }) {
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
    <UserSimpleInfoWrapper>
      <UserSimpleInfoBox>
        <Button size="sm" color={getStyledMbti(mbti)}>
          {mbti}
        </Button>
        <span>{title}</span>

        <CommentBox>
          <img src={Comment} alt="댓글아이콘" />
          <h3>{commentLen}</h3>
        </CommentBox>
      </UserSimpleInfoBox>
    </UserSimpleInfoWrapper>
  );
}
