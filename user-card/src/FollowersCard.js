import React from 'react';
import styled from 'styled-components';

const FollowersCardStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: grey;

    div {
        margin-top: 2em; 

        img {
            border-radius: 50%;
            height: 50%;
        }
    }
`

export default function FollowersCard (props) {
    const { follower } = props;
    debugger
    return (
        <FollowersCardStyle>
            <div>
                <img src={follower.avatar_url} alt='img'/>
                <div><a href={follower.url}>{follower.login}</a></div>
            </div>
       </FollowersCardStyle>
    )
}