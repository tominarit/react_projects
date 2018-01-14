import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Test');
ReactDOM.render(template, document.getElementById('app'));