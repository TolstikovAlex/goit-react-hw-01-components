import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: ${p => p.theme.sizes.cardWidth};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const ProfileMain = styled.div`
  text-align: center;
  padding-top: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;

export const Avatar = styled.img`
  width: ${p => p.theme.sizes.avatarWidthM};
  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.shadows.normal};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentText};
`;

export const Location = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentText};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.primary};
  border-top: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[0]}px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
`;

export const StatsLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.text};
`;

export const StatsValue = styled.span`
  color: ${p => p.theme.colors.secondary};
`;
