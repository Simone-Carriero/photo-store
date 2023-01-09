import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main className='page-100'>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
