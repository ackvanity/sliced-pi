import React from 'react';

function Quote({score}) {
    return (
        (score > 3) ? (<blockquote>You did a good job.</blockquote>) : (score > 1) ? (<blockquote>Try harder next time!</blockquote>) : (<blockquote>You really need to work!</blockquote>)
    )
}