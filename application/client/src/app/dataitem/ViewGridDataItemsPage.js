import React, { useCallback, useEffect, useState } from 'react';
import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  Menu,
  Search,
  Segment,
} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { request } from '../../common/util/request';
import { MultilineBreak } from '../MultilineBreak';
import { SitePage } from '../SitePage';
import { Link } from 'react-router-dom';

/**
 * Page for viewing data items in a Grid container
 *
 * @param string headerTitle - The title for the container
 * @param string dataToken - The token associated with the data item for urls
 * @param Function<item,string> getTitle - Function that collects the displayed title of the item
 * @param Function<item,string> getDescription - Function that collects the displayed description of the item
 * @param Predicate<item,string> filter - Function for filtering items based on a filter token
 * @param Array<string> filterTokens - The list of tokens for filtering items
 */
export const ViewGridDataItemsPage = ({
  headerTitle,
  dataToken,
  getTitle = (item) => item.title,
  getDescription = (item) => item.description,
  filter,
  filterTokens,
}) => {
  // Set up display variables
  const [filterToken, setFilterToken] = useState('All');
  const [dataItems, setDataItems] = useState([]);
  const [query, setQuery] = useState('');
  const onSearchChange = useCallback((e, data) => setQuery(data.value), []);
  const navigate = useNavigate();
  const onResultSelect = (e, { result }) => {
    navigate(`/${dataToken}/${result.id}`);
  };

  // Load data items on render
  useEffect(() => {
    request(`/${dataToken}`).then((data) => {
      setDataItems(data);
    });
  }, []);

  // Filter data items by the search query
  const searchFilteredDataItems = dataItems.filter((item) => {
    return true; // getTitle(item).match(new RegExp(`${query}`));
  });

  // Filter data items by the filter token
  const filterTokenFilteredDataItems = dataItems.filter((item) => {
    return true; // filter(getTitle(item), filterToken);
  });

  return (
    <SitePage>
      <DataItemsSearchSegment
        headerTitle={headerTitle}
        onSearchChange={onSearchChange}
        onResultSelect={onResultSelect}
        dataItems={searchFilteredDataItems}
        query={query}
      />
      <DataItemsMenuGridColumnContainer>
        <DataItemsMenuColumn
          filterToken={filterToken}
          setFilterToken={setFilterToken}
          filterTokens={filterTokens}
        />
        <DataItemsGridColumn
          dataToken={dataToken}
          dataItems={filterTokenFilteredDataItems}
          getTitle={getTitle}
          getDescription={getDescription}
        />
      </DataItemsMenuGridColumnContainer>
    </SitePage>
  );
};

/**
 * Segment for displaying search container
 *
 * @param string headerTitle - The title for the container
 * @param Consumer<event> onSearchChange - Action that occurs when the search bar text changes
 * @param Consumer<event> onResultSelect - Action that occurs when a data item is clicked
 * @param string query - Search bar text
 */
const DataItemsSearchSegment = ({
  headerTitle,
  onSearchChange,
  onResultSelect,
  dataItems,
  query,
}) => {
  return (
    <Segment style={{ backgroundColor: 'rgb(255, 235, 255)' }}>
      <Header as="h1">{headerTitle}</Header>
      <Search
        size="big"
        fluid
        selectFirstResult
        onSearchChange={onSearchChange}
        onResultSelect={onResultSelect}
        results={dataItems}
        value={query}
      />
    </Segment>
  );
};

/**
 * Grid for displaying data items along with filter menu
 */
const DataItemsMenuGridColumnContainer = ({ children }) => {
  return (
    <Container fluid>
      <Grid>
        <Grid.Row>{children}</Grid.Row>
      </Grid>
    </Container>
  );
};

/**
 * Menu for filter data items by data token
 *
 * @param string filterToken - The token used to filter items
 * @param Consumer<string> setFilterToken - Action that updates the filter token
 * @param Array<string> filterTokens - The list of possible filter tokens
 */
const DataItemsMenuColumn = ({ filterToken, setFilterToken, filterTokens }) => {
  return (
    <Grid.Column width={2}>
      <Menu fluid vertical tabular>
        {filterTokens.map((listedFilterToken) => (
          <Menu.Item
            name={listedFilterToken}
            style={{ backgroundColor: 'rgb(255,255,255)' }}
            active={filterToken === listedFilterToken}
            onClick={(e, { name }) => setFilterToken(name)}
          />
        ))}
      </Menu>
    </Grid.Column>
  );
};

/**
 * Container for viewing data items
 *
 * @param string dataToken - The token associated with the data item for urls
 * @param Array<item> dataItems - The retrieved data items to display
 * @param Function<item,string> getTitle - Function that collects the displayed title of the item
 * @param Function<item,string> getDescription - Function that collects the displayed description of the item
 */
const DataItemsGridColumn = ({
  dataToken,
  dataItems,
  getTitle,
  getDescription,
}) => {
  const postImage = require('../resources/post-image.png');
  return (
    <Grid.Column width={14}>
      <Container float="right">
        <Card.Group itemsPerRow={5}>
          {dataItems.map((item) => {
            return (
              <DataGridItemsCard
                dataToken={dataToken}
                itemId={item.id}
                itemImage={postImage}
                itemTitle={getTitle(item)}
                itemDescription={getDescription(item)}
              />
            );
          })}
        </Card.Group>
      </Container>
    </Grid.Column>
  );
};

/**
 * Card for displaying a single data item
 *
 * @param string dataToken - The token associated with the data item for urls
 * @param string itemId - The id of the data item
 * @param string itemId - The url of the image of the data item
 * @param string itemTitle - The title of the data item
 * @param string itemDescription - The description of the data item
 */
const DataGridItemsCard = ({
  dataToken,
  itemId,
  itemImage,
  itemTitle,
  itemDescription,
}) => {
  return (
    <Link to={`/${dataToken}/${itemId}`}>
      <Card
        style={{
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 11,
          marginRight: 11,
          width: 200,
          height: 400,
        }}
      >
        <Image src={`${itemImage}`} />
        <Card.Content>
          <Card.Header>{itemTitle}</Card.Header>
          <Card.Description>{itemDescription}</Card.Description>
          <MultilineBreak lines={2} />
        </Card.Content>
      </Card>
    </Link>
  );
};
