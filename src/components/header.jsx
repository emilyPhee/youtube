import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyle } from './styles/Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
        <Link to={'/youtube'}>
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

      <a href="https://github.com/emilyPhee" target="_blank">
        <div
          style={{
            backgroundColor: '#ededed',
            borderRadius: '50%',
            height: '30px',
            width: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{ textDecoration: 'none', color: '#9c9c9c' }}
          />
        </div>
      </a>
    </HeaderStyle>
  );
};

export default Header;
