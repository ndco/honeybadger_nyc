import React from 'react';

const CredentialsForm = ( {  handler } ) => {
    return (
        <form onSubmit={handler}>
            <input className='email-input' placeholder='enter email'/>
            <input className='password-input' placeholder='enter password' type='password'/>
            <button className='credentials-submit' type='submit'>Submit</button>
        </form>
    )
}

export default CredentialsForm;
