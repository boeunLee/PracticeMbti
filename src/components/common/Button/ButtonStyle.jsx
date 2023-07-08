import styled, { css } from "styled-components";

const COLORS = {
  question: css`
    --color: ${({ theme }) => theme.colors.white};
    --bg-color: ${({ theme }) => theme.colors.navy};
  `,
  NF: css`
    --color: ${({ theme }) => theme.colors.white};
    --bg-color: #4ebaa9;
  `,
  NT: css`
    --color: ${({ theme }) => theme.colors.white};
    --bg-color: #8570c2;
  `,
  SJ: css`
    --color: ${({ theme }) => theme.colors.white};
    --bg-color: #4d88d9;
  `,
  SP: css`
    --color: ${({ theme }) => theme.colors.white};
    --bg-color: #f79665;
  `,
};

const SIZES = {
  // SimpleInfo button, 더 보기 button
  sm: css`
    --font-size: ${({ theme }) => theme.fontSize.sm};
    --font-weight: 700;
    --padding: 5px 14px;
    --min-width: 60px;
  `,
  // 질문하기 button
  md: css`
    --font-size: ${({ theme }) => theme.fontSize.sm};
    --font-weight: 500;
    --padding: 9px;
    --min-width: 80px;
  `,
  // mbti에게 질문 button
  lg: css`
    --font-size: ${({ theme }) => theme.fontSize.md};
    --font-weight: 700;
    --padding: 10px 13px;
    --border-radius: 30px;
    --min-width: 160px;
  `,
};

const StyledButton = styled.button`
  ${(p) => p.size}
  ${(p) => p.color}

  min-width: var(--min-width);
  border-radius: var(--border-radius, 20px);
  font-weight: var(--font-weight, 500);
  font-size: var(--font-size, 1.4rem);
  padding: var(--padding);
  color: var(--color, ${({ theme }) => theme.colors.white});
  background-color: var(--bg-color, ${({ theme }) => theme.colors.mainCoral});
  border: var(--border, 1px solid currentColor);
`;

export { SIZES, COLORS, StyledButton };
