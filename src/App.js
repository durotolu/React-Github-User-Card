import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import GithubInfo from './GithubInfo'
import FollowersList from './FollowersList'
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const githubApi = 'https://api.github.com/users/durotolu'
const followersApi ='https://api.github.com/users/durotolu/followers'

const AppStyle = styled.div`
  margin: 0 auto;

  .nav {
    display: flex;
    justify-content: space-around;
  }
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiState: '',
      followersState: {
        followers: []
      },
      form: ''
    }
    
  }
  
  handleChange = event => {
    this.setState({
    form: event.target.value
    })
  }
  //const [apiState, setApiState] = useState([])
  
  componentDidMount() {
    const apiPromise = axios.get(githubApi);
    const followersPromise = axios.get(followersApi);
    Promise.all([apiPromise, followersPromise])
    .then((apiRes) => {
      
      this.setState({
        apiState: apiRes[0].data,
        followersState: {
          followers: apiRes[1].data
        },
        form: ''
      })
      //console.log(apiState)
    })
    .catch((err) => {
      
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    //preventDefault()
    const handleSubmit = (input) => {
      debugger
    }
    debugger
  }

  render () {
    const { apiState, followersState } = this.state;
    return (
    <AppStyle className="App">
      <div class='nav'>
        <strong>Github User Card</strong>
        <Link to='/'>Home</Link>
        <Link to='/followers'>Followers</Link>
        <SearchForm handleSubmit={this.handleSubmit} apiState={this.state} form={this.state.form} handleChange={this.handleChange} />
      </div>
      <Route exact path='/' render={props => <GithubInfo {...props} apiState={apiState} />} />
      <Route exact path='/followers' render={props => <FollowersList {...props} followersState={followersState} />} />
    </AppStyle>
  );
  }
  
}

export default App;

