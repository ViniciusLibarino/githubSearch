import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Wrapper } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <FontAwesome name="github" size={150} color="#363636" />
    </Wrapper>
  );
};

export default Header;
