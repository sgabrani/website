import 'main.scss';
import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import {Provider, createStore} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {render} from 'react-dom';

import {store, history} from 'reducers';

import Home from 'containers/home';

// hack for convenience
Number.prototype.map = function(fn) {
	const res = [];
	for (let i = 0; i < this.valueOf(); i++)
		res.push(fn(i, res));
	return res;
};

class App extends React.Component {
	render(){
		return (
			<Provider store={store}>
				<ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
					<div>
						<Switch>
							<Route path="/" component={Home}/>
							<Route path="/about" component={Home}/>
							<Route path="/events" component={Home}/>
							<Route path="/sponsors" component={Home}/>
							<Redirect to="/"/>
						</Switch>
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}

render(<App />, document.getElementById('mount'));
