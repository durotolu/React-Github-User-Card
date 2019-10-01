import React from 'react';

export default function GithubInfo (props) {
    const { apiState } = props;
    //console.log(followersState.followers)
    debugger
    return (
        <div>
            <div>{apiState.name}</div>
       </div>
    )
}