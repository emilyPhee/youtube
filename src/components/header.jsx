import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyle } from './styles/Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SearchIconImg from '../../src/search.png';
import YoutubeLogo from '../../src/logo.png';

const Header = props => {
  const [query, setQuery] = useState('');

  return (
    <HeaderStyle>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ padding: '15px', fontSize: '1.5rem' }}
        ></FontAwesomeIcon>
        <Link to={'/videos'}>
          <img src={YoutubeLogo} alt="" style={{ marginRight: '1rem' }} />
        </Link>
        YouTube
      </div>
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
          <img src={SearchIconImg} alt=""></img>
        </button>
      </div>
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '50%',
          height: '30px',
          width: '30px',
        }}
      ></div>
    </HeaderStyle>
  );
};

export default Header;
