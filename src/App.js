import React from 'react';

// styles
import './App.css';
// compos
import {
    Banner,
    Body
} from './components'

function App() {
    return (
        <div className="App">
            <Banner />
            <Body />
        </div>
    );
}

export default App;