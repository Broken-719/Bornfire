import React, { useState, useRef, useEffect } from 'react';
import './Orders.css';

function Orders() {
    const initialOrders = [
        { id: 6, product: 'OnePlus 13', clientId: '#00015', clientName: 'Max Jefferson', status: 'Paid' },
        { id: 3, product: 'Samsung S24 Ultra', clientId: '#00165', clientName: 'Brook Johnson', status: 'Due' },
        { id: 1, product: 'Samsung S25 Ultra', clientId: '#01293', clientName: 'Jeff Riley', status: 'Cancelled' },
        { id: 17, product: 'Xiaomi Mi 14 Ultra', clientId: '#00004', clientName: 'Michael Stallon', status: 'Due' },
        { id: 11, product: 'Redmagic 10 Pro', clientId: '#3456', clientName: 'Kaleb Anderson', status: 'Cancelled' },
    ];

    const [filter, setFilter] = useState('all');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const normalizedFilter = filter.toLowerCase();
    const filteredOrders = initialOrders.filter(o => {
        return filter === 'all' || o.status.toLowerCase() === normalizedFilter;
    });

    const statusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'paid': return 'success';
            case 'due': return 'warning';
            case 'cancelled': return 'danger';
            default: return '';
        }
    };

    const displayFilterLabel = filter === 'all' ? 'Filter' : filter[0].toUpperCase() + filter.slice(1);

    return (
        <div className='orders'>

            {/* Header */}
            <div className="orders-header">
                <h1>My Orders</h1>
                <p>Sep 03 2025</p>

                <div className="filter-wrap" ref={dropdownRef}>
                    <button className="btn-1" onClick={() => setOpen(prev => !prev)}>
                        {displayFilterLabel}
                    </button>

                    {open && (
                        <ul className="filter-dropdown">
                            <li onClick={() => { setFilter('all'); setOpen(false); }}>All</li>
                            <li onClick={() => { setFilter('paid'); setOpen(false); }}>Paid</li>
                            <li onClick={() => { setFilter('due'); setOpen(false); }}>Due</li>
                            <li onClick={() => { setFilter('cancelled'); setOpen(false); }}>Cancelled</li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className='table-responsive-1'>
                <table className='table-1 mt-3'>
                    <thead>
                        <tr>
                            <th className='cell-1'>Product ID</th>
                            <th className='cell-1'>Product Name</th>
                            <th className='cell-1'>Client ID</th>
                            <th className='cell-1'>Client Name</th>
                            <th className='cell-1'>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(o => (
                            <tr key={o.id}>
                                <td className='cell-1'>{o.id}</td>
                                <td className='cell-1'>{o.product}</td>
                                <td className='cell-1'>{o.clientId}</td>
                                <td className='cell-1'>{o.clientName}</td>
                                <td className={`cell-1 ${statusClass(o.status)}`}>{o.status}</td>
                            </tr>
                        ))}
                        {filteredOrders.length === 0 && (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>No orders match the selected filter.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;