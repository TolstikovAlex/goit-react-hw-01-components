import styled from 'styled-components';

const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${randomColor};
`;
