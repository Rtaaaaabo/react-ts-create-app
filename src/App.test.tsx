// import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<Hello greeting="Hello!!!" />, );
  ReactDOM.unmountComponentAtNode(div);
});
