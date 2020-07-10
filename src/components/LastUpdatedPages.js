import React from 'react';

const LastUpdatedPages = (props) => {
    return (
        <div>
            <small>
                <i>Last Updated: {props.date}</i>
            </small>
            <hr />
        </div>
    )
}

export default LastUpdatedPages
