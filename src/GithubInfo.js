import React from 'react';
import styled from 'styled-components'

const GithubInfoStyle = styled.div`
    font-weight: bold;
    background-color: grey;
    color: white;

    div {
        margin: 1em;
        background-color: black;

        span {
            margin: 2em;
        }
    }
`

export default function GithubInfo (props) {
    const { apiState } = props;
    //console.log(followersState.followers)
    return (
        <GithubInfoStyle>
            <img src={apiState.avatar_url} alt="image" />
            <div>{apiState.login}</div>
            <div><span>Followers:  {apiState.followers}</span><span>Following:  {apiState.following}</span></div>
       </GithubInfoStyle>
    )
}