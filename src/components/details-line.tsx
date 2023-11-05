import React from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: string;
}> = ({label, children}) => {
  return (
    <DetailsLineContainer>
      <DetailsLabel>{label}</DetailsLabel>
      <DetailsLineContent>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLabel = styled(Typography)({
  marginRight: 16,
});

DetailsLabel.defaultProps = {
  fontSize: 14,
  weight: 'medium',
};

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
