import React from 'react';

import { HeaderStyle } from './styles/Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = props => (
  <HeaderStyle>
    <div>
      <input type="text" placeholder="Search" />
      <button type="button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  </HeaderStyle>
);

export default Header;
