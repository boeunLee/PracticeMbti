import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  width: clamp(390px, 100%, 500px);
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  box-shadow: rgba(105, 80, 80, 0.08) 0px -3px 20px;
  overflow-y: hidden;
`;

const LayoutMain = styled.div`
  margin: 0px 20px;
  overflow-y: scroll;
  /* height: ${(p) => !p.isNonNav && "calc(100vh - 68px)"}; */
  height: calc(100vh-68px);
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function BasicLayout({ children }) {
  return (
    <LayoutWrapper>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
}
