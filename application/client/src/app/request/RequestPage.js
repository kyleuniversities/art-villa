import { useHtmlTitle } from '../../common/util/hook';
import { RequestContainer } from '../RequestContainer';
import { SitePage } from '../SitePage';

/**
 * The Request Page for the app
 */
export const RequestPage = () => {
  useHtmlTitle('Art Villa');
  return (
    <SitePage>
      <RequestContainer />
    </SitePage>
  );
};
