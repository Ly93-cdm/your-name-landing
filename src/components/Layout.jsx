import React from 'react';
import Navigation from './Navigation';

function Layout({ children, open, setOpen }) {
    return (
        <>
            <div className="background" />
            <Navigation open={open} setOpen={setOpen} />
            {children}
        </>
    );
}

export default Layout;
