import './App.css';
import React from 'react';
import Provider from './store/Provider';
import Users from './containers/Users/pages/Users';

const App: React.FC = () => {
    return (
        <Provider>
            <Users />
        </Provider>
    );
};

export default App;
