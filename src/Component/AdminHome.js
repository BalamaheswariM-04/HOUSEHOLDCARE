import React from 'react'
import Navbar from './AdminNavbar';
import ShowcasePage from './ShowcasePage';
import AdminDashboard from './AdminDashboard';
// import Dashboard from './Dashboard';
export default function AdminHome() {
  return (
    <div>
        <Navbar/>
        <ShowcasePage/>
        <AdminDashboard/>
        {/* <Dashboard/> */}
    </div>
  )
}
