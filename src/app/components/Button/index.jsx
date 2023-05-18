import React from 'react';
import { Typography } from '@mui/material';
import { ButtonContainer } from './style';

function Button(props) {
  return (
    <ButtonContainer variant={'contained'} {...props} disabled={props.isDisable}>
      <Typography
        style={{
          color: props.variant !== 'contained' && props.variant !== undefined ? 'black' : 'white',
          fontSize: 16,
          ...(props.textStyle || {}),
        }}
      >
        {props.title}
      </Typography>
    </ButtonContainer>
  );
}

export default Button;
