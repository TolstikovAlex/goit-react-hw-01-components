import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  margin-right: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes.s}px;
  height: ${p => p.theme.sizes.s}px;

  background-color: ${p => {
    return p.status ? p.theme.colors.active : p.theme.colors.inactive;
  }};

  border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img`
  width: ${p => p.theme.sizes.avatarWidthS};
  margin-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;
