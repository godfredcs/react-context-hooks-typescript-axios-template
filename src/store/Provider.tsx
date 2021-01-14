import React from 'react';
import { UserProvider } from './../containers/Users/store/context';

const Provider: React.FC<{ children: React.ReactChild }> = ({ children }) => (
    <React.StrictMode>
        <UserProvider>
            {children}
        </UserProvider>
    </React.StrictMode>
);

export default Provider;
