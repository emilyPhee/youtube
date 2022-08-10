import React from 'react';

import { LeftSideContainer } from './styles/LeftSideContainer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const SideMenu = props => (
  <>
    <LeftSideContainer>
      <div>
        <FontAwesomeIcon icon={faHouse} color="#fff" />
        <h4>Home</h4>
      </div>

      <div>
        <FontAwesomeIcon icon={faCompass} />
        <h4>Explore</h4>
      </div>

      {/* <div>
        <FontAwesomeIcon
          icon={<FontAwesomeIcon icon={} />}
          color="#fff"
        />
        <h4>Shorts</h4>
      </div> */}

      {/* <div>
        <FontAwesomeIcon icon={faHouse} color="#fff" />
        <h4>Home</h4>
      </div> */}
    </LeftSideContainer>
  </>
);

export default SideMenu;
