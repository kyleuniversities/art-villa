import { Button, Container, Form, Segment, TextArea } from 'semantic-ui-react';
import { useState } from 'react';
import { deriveApiHost, fullRequest } from '../common/util/request';
import { MultilineBreak } from './MultilineBreak';

/**
 * Container for making a GET request
 */
export const RequestContainer = () => {
  const [fullUrl, setFullUrl] = useState(deriveApiHost());
  const [res, setRes] = useState('');
  return (
    <RequestContainerSegment
      style={{ borderColor: 'black', borderWidth: '3px' }}
    >
      <Form>
        <RequestContainerUrlTextField
          fullUrl={fullUrl}
          setFullUrl={setFullUrl}
        />
        <RequestContainerSubmitButton fullUrl={fullUrl} setRes={setRes} />
      </Form>
      <MultilineBreak lines={3} />
      <RequestContainerResponseContainer res={res} />
    </RequestContainerSegment>
  );
};

// Wrapper for the Request Container
const RequestContainerSegment = ({ children }) => {
  return (
    <Segment style={{ borderColor: 'black', borderWidth: '3px' }}>
      <h1>Request Container</h1>
      {children}
    </Segment>
  );
};

// Url text field for the Request Container
const RequestContainerUrlTextField = ({ fullUrl, setFullUrl }) => {
  return (
    <Form.Input
      style={{ fontFamily: 'Helvetica Neue' }}
      label="Enter your request URL"
      value={fullUrl}
      onChange={(e) => setFullUrl(e.target.value)}
    />
  );
};

// Button for sending the request
const RequestContainerSubmitButton = ({ fullUrl, setRes }) => {
  return (
    <Button
      onClick={() =>
        fullRequest(fullUrl).then((data) => setRes(JSON.stringify(data)))
      }
    >
      Submit
    </Button>
  );
};

// Container for the response data
const RequestContainerResponseContainer = ({ res }) => {
  return (
    <Container fluid>
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
    </Container>
  );
};
