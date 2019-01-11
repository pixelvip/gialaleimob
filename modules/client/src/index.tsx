import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './container/App';

// Stlyes
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
