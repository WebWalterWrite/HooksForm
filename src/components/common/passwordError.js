import React, { Fragment } from 'react';

export const Password = ({msg}) => {
    const { errPassword } = msg;
    if(typeof(errPassword) !== 'object')
    return (<p>{errPassword}</p>);
    
    return(
    <Fragment>
    {errPassword && errPassword.map(({number, specCharacter, upperCase}, k) =>{
        return(
            <ul key={k}>
                {number && <li>{number}</li>}
                {specCharacter && <li>{specCharacter}</li>}
                {upperCase && <li>{upperCase}</li>}
            </ul>
        )
    })}
    </Fragment>
    )
};