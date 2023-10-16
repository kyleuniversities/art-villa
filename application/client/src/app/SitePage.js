import { Container } from 'semantic-ui-react';
import { SiteHeader } from './SiteHeader';

/**
 * A UI Wrapper component for all site pages
 */
export const SitePage = ({ children }) => {
  return (
    <Container>
      <SiteHeader />
      {children}
    </Container>
  );
};
