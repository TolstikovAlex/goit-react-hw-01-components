import styled from 'styled-components';

export const StatsSection = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes.normal};
  margin: 0 auto;
  box-shadow: ${p => p.theme.shadows.normal};
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.secondary};
`;
// export const Label = styled.span``;
// export const Label = styled.span``;
