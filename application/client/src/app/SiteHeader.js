import { Icon, Menu } from 'semantic-ui-react';

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
  return (
    <Menu.Item>
      <Icon name="home" size="big" />
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
