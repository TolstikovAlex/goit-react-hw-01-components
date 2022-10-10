import styled from 'styled-components';

export const Table = styled.table`
  max-width: ${p => p.theme.sizes.large};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
  text-align: center;
`;

export const TableHead = styled.thead`
  color: ${p => p.theme.colors.white};
`;

export const TableColumn = styled.th`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.thcolor};
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const TableData = styled.td`
  padding: ${p => p.theme.space[4]}px;
`;

export const TableBody = styled.tbody`
  color: ${p => p.theme.colors.text};
`;
