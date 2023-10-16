import { useHtmlTitle } from '../../common/util/hook';
import { SitePage } from '../SitePage';

/**
 * The Home Page for the app
 */
export const HomePage = () => {
  useHtmlTitle('Art Villa');
  return <SitePage>[Home]</SitePage>;
};
