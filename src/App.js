import { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList.component';
import SearchField from './components/SearchField/SearchField.component';

class App extends Component {
	state = {
		monsters: [],
		searchValue: ''
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) =>
				this.setState({
					monsters: users
				})
			);
	}

	handleChange = (e) => {
		this.setState({
			searchValue: e.target.value
		});
	};

	render() {
		const { monsters, searchValue } = this.state;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchValue.toLowerCase());
		});
		return (
			<div className="app">
				<h1>Monsters Rolodex</h1>
				<SearchField
					placeholder="search monsters"
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
