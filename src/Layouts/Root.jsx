import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return ( 
        <div className='dark:bg-gray-900 h-screen'>
            <Outlet/>
        </div>
    );
};

export default Root;