import React from 'react';
import {Routes, Route} from 'react-router-dom';
import WaitList from '../components/WlPage';

const RouteLayout = () => {
    return (
        <Routes>
            <Route path='' element={<WaitList />} />
        </Routes>
    )
}

export default RouteLayout