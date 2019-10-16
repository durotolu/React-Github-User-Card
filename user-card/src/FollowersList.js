import React from 'react';
import FollowersCard from './FollowersCard'

export default function FollowersList (props) {
    const { followersState } = props;
    debugger
    return (
        <div>
            {followersState.followers.map((follower) => <FollowersCard follower={follower} />)}
       </div>
    )
}