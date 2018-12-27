import React, { Fragment } from 'react';

export const Password = ({msg}) => {
    const {errPassword } = msg
    const { errPassword:{number, specCharacter, upperCase}={} } = msg;
    if(typeof(errPassword) !== 'object')
    return (<div>{errPassword}</div>);
    return(
    <Fragment>
            <ul>
                {number && <li>{number}</li>}
                {specCharacter && <li>{specCharacter}</li>}
                {upperCase && <li>{upperCase}</li>}
            </ul>
    </Fragment>
    )
};