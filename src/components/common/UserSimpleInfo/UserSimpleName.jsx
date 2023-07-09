import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const UserSimpleNameWrapper = styled.div`
  span {
    margin-left: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.gray200};
    vertical-align: middle;
  }
`;

export default function UserSimpleName({ color, userMbti, username }) {
  return (
    <UserSimpleNameWrapper>
      <Button size="sm" color={color}>
        {userMbti}
      </Button>
      <span>{username}</span>
    </UserSimpleNameWrapper>
  );
}
