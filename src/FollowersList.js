import React from 'react';
import FollowersCard from './FollowersCard'

export default function FollowersList (props) {
    const { followersState } = props;
    
    return (
        <div>
            {followersState.followers.map((follower) => <FollowersCard follower={follower} />)}
       </div>
    )
}