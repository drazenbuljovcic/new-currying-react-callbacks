import styled from 'styled-components';

const Block = styled.div`
  user-select: none;
  min-width: 0px;

  ${({ theme, backgroundColor }) => `
    background-color: ${backgroundColor || theme.colors.light};
    padding: 1.5em;
  `}
`;

const Stamp = styled.span`
  line-height 1em;
  font-size: 1.6em;
  font-family: 'Fira Sans Light', sans-serif;

  ${({ clickable }) => clickable && `
    cursor: pointer;
  `}
`;

const Cancel = styled.span`
  font-size: 1.5em;
  margin: ${({ theme }) => `${theme.gaps.small}`};

  ${({ clickable }) => clickable && `
    cursor: pointer;
  `}
`;

const ActiveLabel = styled.span`
  display: block;

  text-align: center;
  font-size: .8em;
`;

export {
  Block,
  Stamp,
  Cancel,
  ActiveLabel,
};
