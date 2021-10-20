import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../context/UseAuth';

const Privatroute = ({ children, ...rest }) => {

    const { user, isloading } = UseAuth()

    if (isloading) {
        return <Spinner animation="grow" variant="dark" />
    }
    return (
        <Route

            {...rest}
            render={({ location }) =>
                user.email ? children
                    :
                    <Redirect
                        to={{
                            pathname: "/SignIn",
                            state: { from: location }
                        }}

                    ></Redirect>



            }
        >

        </Route>


    );
};

export default Privatroute;