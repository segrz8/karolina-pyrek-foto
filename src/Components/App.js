import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Nav'
import Hamburger from './Hamburger'

import Start from './Start'
import About from './About'
import Wedding from './Wedding'
import Outdoor from './Outdoor'
import Contact from './Contact'

class App extends React.Component {

	state = {
		menuActive: false,
	}

	handleMenu = () => {
		this.setState({
			menuActive: !this.state.menuActive,
		});
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Hamburger
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<Nav
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<ScrollToTop>
						<Route exact path="/" component={Start} />
						<Route path="/about" component={About} />
						<Route path="/wedding" component={Wedding} />
						<Route path="/outdoor" component={Outdoor} />
						<Route path="/contact" component={Contact} />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
