import styled from "styled-components";

const ListWrapper = styled.section`
  margin-top: 50px;
`;
const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  h2 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.sm};
    align-self: center;
    color: ${({ theme }) => theme.colors.navy};
  }
`;

export { ListWrapper, ListHeader };
