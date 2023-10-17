import { useHtmlTitle } from '../../common/util/hook';
import { RequestContainer } from '../RequestContainer';
import { SitePage } from '../SitePage';

/**
 * The Home Page for the app
 */
export const HomePage = () => {
  useHtmlTitle('Art Villa');
  return (
    <SitePage>
      <RequestContainer />
    </SitePage>
  );
};
