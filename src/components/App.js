import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

require('overeasy/dist/overeasy.min.css');
require('font-awesome/css/font-awesome.min.css');

const App = () => (
	<Router>
		<div id="app">
			<h1>React Boilerplate App</h1>
		</div>
	</Router>
);

export default App;
