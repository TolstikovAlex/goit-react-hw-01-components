import styled from 'styled-components';

export const StatsSection = styled.section`
  width: ${p => p.theme.sizes.normal};
  margin: 24px auto;
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.secondary};
`;
