import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import GithubInfo from './GithubInfo'
import FollowersList from './FollowersList'
import { Route, Link } from 'react-router-dom';

const githubApi = 'https://api.github.com/users/durotolu'
const followersApi ='https://api.github.com/users/durotolu/followers'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiState: {
        name: '',
      },
      followersState: {
        followers: []
      }
    }
  }
  
  //const [apiState, setApiState] = useState([])
  
  componentDidMount() {
    const apiPromise = axios.get(githubApi);
    const followersPromise = axios.get(followersApi);
    Promise.all([apiPromise, followersPromise])
    .then((apiRes) => {
      debugger
      this.setState({
        apiState: {
          name: apiRes[0].data.name, 
        },
        followersState: {
          followers: apiRes[1].data
        }
      })
      //console.log(apiState)
    })
    .catch((err) => {
      debugger
    })
  }
  

  render () {
    const { apiState, followersState } = this.state;
    return (
    <div className="App">
      Github User Card
      <Link to='/'>Home</Link>
      <Link to='/followers'>Followers</Link>
      <Route exact path='/' render={props => <GithubInfo {...props} apiState={apiState} />} />
      <Route exact path='/followers' render={props => <FollowersList {...props} followersState={followersState} />} />
    </div>
  );
  }
  
}

export default App;
