import { Button, Form, Segment, TextArea } from 'semantic-ui-react';
import { useHtmlTitle } from '../../common/util/hook';
import { SitePage } from '../SitePage';
import { useState } from 'react';
import { fullRequest } from '../../common/util/request';

/**
 * The Home Page for the app
 */
export const HomePage = () => {
  useHtmlTitle('Art Villa');
  return (
    <SitePage>
      <HomePageRequestContainer />
    </SitePage>
  );
};

// Container for making GET request
const HomePageRequestContainer = () => {
  const [fullUrl, setFullUrl] = useState('http://localhost:5000/');
  const [res, setRes] = useState('');
  return (
    <Segment style={{ borderColor: 'black', borderWidth: '3px' }}>
      <h1>Request Container</h1>
      <Form>
        <Form.Input
          style={{ fontFamily: 'Helvetica Neue' }}
          label="Enter your request URL"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
        />
        <Button
          onClick={() =>
            fullRequest(fullUrl).then((data) => setRes(JSON.stringify(data)))
          }
        >
          Submit
        </Button>
      </Form>
      <br></br>
      <h3>Response: </h3>
      <TextArea
        fluid
        disabled
        style={{
          backgroundColor: 'rgb(255,255,255)',
          color: 'black',
          position: 'relative',
          height: '200px',
          width: '100%',
        }}
        value={res}
      />
    </Segment>
  );
};
