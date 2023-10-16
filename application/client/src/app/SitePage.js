import { Container } from 'semantic-ui-react';
import { SiteHeader } from './SiteHeader';

/**
 * A UI Wrapper component for all site pages
 */
export const SitePage = ({ children }) => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: 'rgb(255, 200, 255)',
        minHeight: '100vh',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '5px',
      }}
    >
      <SiteHeader />
      {children}
    </Container>
  );
};
