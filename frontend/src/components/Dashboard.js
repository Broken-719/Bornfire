import './Dashboard.css';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Doughnut, Line } from 'react-chartjs-2';

import salesData from './data/salesData.json';
import revenueData from './data/revenueData.json';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function Dashboard() {

    return (
        <div className="dashboard">

            {/* Header */}

            <div className="dashboard-header">
                <h1>Hello Admin!</h1>
                <p>Sep 03 2025</p>
            </div>

            {/* status */}

            <div className="status-cards"> 

                <div className="card-1">
                    <ion-icon name="cart"></ion-icon>
                    <h3>Total sales</h3>
                    <p>$53,287</p>
                </div>

                <div className="card-1">
                    <ion-icon name="people"></ion-icon>
                    <h3>Total visitors</h3>
                    <p>4817</p>
                </div>

                <div className="card-1">
                    <ion-icon name="wallet"></ion-icon>
                    <h3>Total orders</h3>
                    <p>25015</p>
                </div>

                <div className="card-1">
                    <ion-icon name="cash"></ion-icon>
                    <h3>Total Refunded</h3>
                    <p>$23,221</p>
                </div>
            </div>

            {/* charts */}

            <div className="charts">
                <div className="revenue-chart">
                    <h3>Revenue</h3>
                    <div className="revenue">
                        <Line 
                        data={{
                            labels: revenueData.map(data => data.label),
                            datasets: [
                                {
                                    label: 'Revenue',
                                    data: revenueData.map((data) => data.revenue),
                                },
                                {
                                    label: 'Cost',
                                    data: revenueData.map((data) => data.cost),
                                }
                            ]}}
                        />      
                    </div>
                </div>
                <div className="sales-chart">
                    <h3>Sales Analytics</h3>
                    <div className="sales analytics">
                       <Doughnut 
                        data={{
                            labels: salesData.map(data => data.label),
                            datasets: [
                                {
                                    label: 'Sales',
                                    data: salesData.map((data) => data.value),
                                }
                            ]}}
                        />
                    </div>
                </div>
            </div>

            {/* recent orders */}
            <div className="divider">
                <div className="recent-orders">
                    <div className="table-header">
                        <h3>Latest Orders</h3>
                        <a className="btn-2" href="/orders">View All Orders</a>
                    </div>
                    <div className="table">
                    <table>
                        <thead>
                            <th className='cell'>Date</th>
                            <th className='cell'>Product Name</th>
                            <th className='cell'>Product ID</th>
                            <th className='cell'>Payment</th>
                            <th className='cell'>Status</th>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>2023-09-15</td>
                                    <td>Samsung S24</td>
                                    <td>#00001</td>
                                    <td className='due'>Due</td>
                                    <td className="warning">Pending</td>
                                </tr>
                                <tr>    
                                    <td>2023-09-14</td>
                                    <td>IPhone 14 Pro Max</td>
                                    <td>#00002</td>
                                    <td className='paid'>Paid</td>
                                    <td className="success">Delivered</td>
                                </tr>
                                <tr>
                                    <td>2023-09-13</td>
                                    <td>Samsung S22 Ultra</td>
                                    <td>#00003</td>  
                                    <td className='paid'>Paid</td>
                                    <td className="warning">Pending</td>
                                </tr>
                                <tr>
                                    <td>2023-09-12</td>
                                    <td>Google Pixel 7</td>
                                    <td>#00004</td>
                                    <td className='due'>Due</td>
                                    <td className="danger">Cancel</td>
                                </tr>
                                <tr>
                                    <td>2023-09-11</td>
                                    <td>OnePlus 12</td>
                                    <td>#00005</td>
                                    <td className='paid'>Paid</td>
                                    <td className="success">Delivered</td>
                                </tr>    
                        </tbody>
                    </table>
                    </div>
                </div>

                {/* top products */}

                <div className="top-products">
                    <h3>Top Products</h3>
                    <div className="top-product-list">
                        <div className="product">
                            <img src= {require('./images/s25-ultra.jpg')} alt="Product 1" />
                            <div className="product-info">
                                <p>Samsung S25 Ultra</p>
                                <span className="info">$1299.99 </span>
                            </div>
                        </div>
                        <div className="product">
                            <img src= {require('./images/iphone-16-pro-max.jpg')} alt="Product 1" />
                            <div className="product-info">
                                <p>iPhone 16 Pro Max</p>
                                <span className="info">$1299.99</span>
                            </div>
                        </div>
                        <div className="product">
                            <img src= {require('./images/s24-ultra.jpg')} alt="Product 1" />
                            <div className="product-info">
                                <p>Samsung S24 Ultra</p>
                                <span className="info">$1099.99</span>
                            </div>
                        </div>
                        <div className="product">
                            <img src= {require('./images/oppo-find-x8-pro.jpg')} alt="Product 1" />
                            <div className="product-info">
                                <p>Oppo Find X8 Pro</p>
                                <span className="info">$999.99</span>
                            </div>
                        </div>
                        <div className="product">
                            <img src= {require('./images/rog-10-pro.jpg')} alt="Product 1" />
                            <div className="product-info">
                                <p>ROG 10 Pro</p>
                                <span className="info">$1399.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;