import React from "react";
import Button from "../../common/Button/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.main`
  margin-top: 50px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;

  p {
    color: ${({ theme }) => theme.colors.gray200};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
  }
  sup {
    color: ${({ theme }) => theme.colors.mainCoral};
    font-size: 0.5rem;
    font-weight: 700;
    margin-left: 2px;
  }
`;
const HeaderMain = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  display: flex;
  flex-direction: row;
  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    margin-right: 20px;
    align-self: flex-end;
  }
  Button {
    margin-left: auto;
    margin-bottom: 10px;
  }
`;

export default function Header() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(`question`);
  };
  return (
    <HeaderWrapper>
      <HeaderInfo>
        <p>애스크</p>
        <sup>beta</sup>
      </HeaderInfo>
      <HeaderMain>
        <h1>성격 유형에게 물어보세요</h1>

        <Button size="md" color="question" onClick={handleBtnClick}>
          질문하기
        </Button>
      </HeaderMain>
    </HeaderWrapper>
  );
}
