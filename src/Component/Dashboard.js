import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Navbar from './AdminNavbar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const userData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Users',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const trafficData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Visits',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Service Views',
        data: [85, 69, 90, 91, 76, 75, 60],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div>
      <Navbar/>
    <div className="dashboard">
      <aside className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <div className="logo">HOUSEHoldCare</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </div>
          {/* <div>Home / Dashboard</div>
          <div className="user-settings">
            <span>Dashboard</span>
            <span>Users</span>
            <span>Settings</span>
          </div> */}
        </header>
        <div className="stats">
          <div className="stat-item">
            <p>26K</p>
            <span>Users</span>
          </div>
          <div className="stat-item">
            <p>$6,200</p>
            <span>Income</span>
          </div>
          <div className="stat-item">
            <p>2.49%</p>
            <span>Conversion Rate</span>
          </div>
          <div className="stat-item">
            <p>44K</p>
            <span>Sessions</span>
          </div>
        </div>
        <div className="charts">
          <div className="chart traffic">
            <h3>Traffic</h3>
            <Line data={trafficData} />
          </div>
          <div className="chart income">
            <h3>Income</h3>
            <Bar data={incomeData} />
          </div>
          <div className="chart user">
            <h3>User</h3>
            <Bar data={userData} />
          </div>
        </div>
        <div className="social-stats">
          <div className="social-item facebook">
            <p>Facebook</p>
            <p>89k</p>
            <span>Followers</span>
          </div>
          <div className="social-item twitter">
            <p>Twitter</p>
            <p>973k</p>
            <span>Followers</span>
          </div>
          <div className="social-item linkedin">
            <p>Linkedin</p>
            <p>500+</p>
            <span>Connections</span>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Dashboard;
