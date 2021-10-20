import React, { createContext } from 'react';
import UseFiebase from '../../Hooks/UseFirebase';


export const AuthContext = createContext()

const Authprovider = (props) => {

    const { children } = props

    const allContext = UseFiebase()

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;