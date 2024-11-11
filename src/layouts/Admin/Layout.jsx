import React, { useState } from 'react';
import Sidebar from '@components/sidebar/AdminSidebar';

function Layout({children}) {
  return (
    <div className="flex bg-gray-100 h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
            { children }
        </main>
    </div>
  );
}

export default Layout;
