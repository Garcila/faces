import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../App.css';

const HeaderJs = (props) => {
  const { title, subtitle } = props;
  return (
    <Header className='header' size='huge'>
      <Link className='title-link' size='huge' to='/'>
        {title}
      </Link>
      <Header.Subheader className='subtitle' >
        {subtitle}
      </Header.Subheader>
    </Header>
  );
};

export default HeaderJs;
