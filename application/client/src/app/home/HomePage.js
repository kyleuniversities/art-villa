import { useHtmlTitle } from '../../common/util/hook';
import { RequestContainer } from '../RequestContainer';
import { SitePage } from '../SitePage';
import { ViewGridDataItemsPage } from '../dataitem/ViewGridDataItemsPage';

/**
 * The Home Page for the app
 */
export const HomePage = () => {
  const headerTitle = 'Popular Posts';
  const dataToken = 'posts';
  const filter = (item, filterToken) =>
    item.genre === filterToken || filterToken === 'All';
  const filterTokens = ['All', 'Classic', 'Myth', 'Anime'];
  useHtmlTitle('Art Villa');
  return (
    <ViewGridDataItemsPage
      headerTitle={headerTitle}
      dataToken={dataToken}
      filter={filter}
      filterTokens={filterTokens}
    />
  );
};
