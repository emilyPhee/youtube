import React, { useState } from 'react';

import { HeaderStyle } from './styles/Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const [query, setQuery] = useState('');

  return (
    <HeaderStyle>
      <div>
        <input
          type="text"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button
          type="button"
          onClick={() => {
            props.querySearchResult(query);
            setQuery('');
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
