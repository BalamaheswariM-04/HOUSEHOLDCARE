import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="dashboard1">
            {/*  <header className="dashboard-header">
                 <nav>
                   <ul>
                         <li><a href="/">Home</a></li>
                         <li><a href="/dashboard">Dashboard</a></li>
                         <li><a href="/data">Data</a></li>
                     </ul>
                 </nav>
             </header> */}
            <div className="dashboard-cards1">
                <div className="card1 red">
                    <p>84,198</p>
                    <p>MEMBERSHIP</p>
                </div>
                <div className="card1 orange">
                    <p>36,540</p>
                    <p>SERVICES</p>
                </div>
                <div className="card1 blue">
                    <p>24,225</p>
                    <p>WORKERS</p>
                </div>
                <div className="card1 green">
                    <p>88,658</p>
                    <p>VISITS</p>
                </div>
            </div>
            <div className="dashboard-metrics">
                <div className="metric">
                    <div className="circle">
                        <div className="inner-circle">
                            <p>82%</p>
                        </div>
                    </div>
                    <p>PROFIT</p>
                </div>
                <div className="metric">
                    <div className="circle">
                        <div className="inner-circle red">
                            <p>46%</p>
                        </div>
                    </div>
                    <p>NO. OF VISITS</p>
                </div>
                <div className="metric">
                    <div className="circle">
                        <div className="inner-circle">
                            <p>84%</p>
                        </div>
                    </div>
                    <p>CUSTOMERS</p>
                </div>
                <div className="metric">
                    <div className="circle">
                        <div className="inner-circle orange">
                            <p>55%</p>
                        </div>
                    </div>
                    <p>SERVICES</p>
                </div>
            </div>
            <div className="donut-chart">
                <div className="donut-chart-inner">
                    <p>Users</p>
                    <p>30</p>
                </div>
                <p>DONUT CHART EXAMPLE</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
