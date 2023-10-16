import { Link } from 'react-router-dom';
import { Icon, Image, Menu } from 'semantic-ui-react';

/**
 * A header component for all site pages
 */
export const SiteHeader = () => {
  return (
    <Menu secondary borderless>
      <SiteHeaderHomeIconItem />
      <SiteHeaderTitleItem />
    </Menu>
  );
};

// The home icon for the website
const SiteHeaderHomeIconItem = () => {
  const logo = require('./resources/logo.png');
  return (
    <Menu.Item>
      <Link to="/">
        <Image src={logo} />
      </Link>
    </Menu.Item>
  );
};

// The title for the website
const SiteHeaderTitleItem = () => {
  const headerTitleStyle = {
    color: 'black',
    fontFamily: 'Helvetica Neue',
    fontSize: '50px',
    fontWeight: 'bold',
  };
  return (
    <Menu.Item>
      <Link to="/">
        <span style={headerTitleStyle}>Art Villa</span>
      </Link>
    </Menu.Item>
  );
};
