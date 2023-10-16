import { Icon, Image, Menu } from 'semantic-ui-react';

/**
 * A header component for all site pages
 */
export const SiteHeader = () => {
  return (
    <Menu borderless>
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
      <Image src={logo} />
    </Menu.Item>
  );
};

// The title for the website
const SiteHeaderTitleItem = () => {
  return (
    <Menu.Item>
      <h1>Art Villa</h1>
    </Menu.Item>
  );
};
