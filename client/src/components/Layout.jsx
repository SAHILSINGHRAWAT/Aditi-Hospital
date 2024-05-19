// Layout.js
import React from 'react';
import Header from './Header';
import Router from './routes/Routers';
function Layout() {
  return (
    <>
        <Header></Header>
        <index>
          <Router></Router> 
        </index>
    </>
  );
}

export default Layout;
