import styled from 'styled-components';

export const StatsSection = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes.normal};
  margin: 0 auto;
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Title = styled.h2`
  margin: 4px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.secondary};
`;
