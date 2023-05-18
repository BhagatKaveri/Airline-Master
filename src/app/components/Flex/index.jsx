import React from 'react';
import { FlexContainer } from './styles';

function Flex(props) {
  return <FlexContainer {...props}>{props.children}</FlexContainer>;
}

export default Flex;
