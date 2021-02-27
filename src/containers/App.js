import React, {Component} from 'react';
import 'tachyons';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
  constructor(){
    super();
    this.state={
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots:users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render(){
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase()
    .includes(searchField.toLowerCase()))

    return (!robots.length) ?
      <h1>Loading</h1> :
     ( <div className='tc'>
          <h1> RoboFriends </h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div> )
  }
}

export default App;
