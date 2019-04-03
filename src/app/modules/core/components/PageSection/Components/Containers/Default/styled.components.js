import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;

  ${({ backgroundColor, theme }) => `
    background-color: ${backgroundColor || theme.colors.default};
  `}
`;

export { Wrapper };
