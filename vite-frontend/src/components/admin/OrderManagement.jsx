import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {Table,
Select,
DatePicker,
Input,
Button,
message,
Space,
Tag,
} from 'antd';

const OrderManagement = () => {
const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(false);
const [filters, setFilters] = useState({
    status: 'all',
    startDate: null,
    endDate: null,
    customer: '',
});

// Fetch orders
const fetchOrders = async () => {
    try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api//order');
        setOrders(response.data);
    } catch (error) {
        message.error('Failed to fetch orders');
    } finally {
        setLoading(false);
    }
};

// Update order status
const updateOrderStatus = async (orderId, newStatus) => {
    try {
        await axios.put(`/api/order/${orderId}`, { orderStatus: newStatus });
        message.success('Order status updated successfully');
        fetchOrders(); // Refresh orders
    } catch (error) {
        message.error('Failed to update order status');
    }
};

useEffect(() => {
    fetchOrders();
}, []);

// Filter orders
const filteredOrders = orders.filter((order) => {
    const matchesStatus =
        filters.status === 'all' || order.orderStatus === filters.status;
    const matchesCustomer = order.userId.toLowerCase().includes(
        filters.customer.toLowerCase()
    );
    const matchesDate =
        (!filters.startDate ||
            moment(order.createdAt) >= filters.startDate) &&
        (!filters.endDate || moment(order.createdAt) <= filters.endDate);
    return matchesStatus && matchesCustomer && matchesDate;
});

const columns = [
    {
        title: 'Order ID',
        dataIndex: 'orderId',
        key: 'orderId',
    },
    {
        title: 'Customer ID',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: 'Products',
        dataIndex: 'products',
        key: 'products',
        render: (products) => (
            <span>{products.map((p) => p.productId).join(', ')}</span>
        ),
    },
    {
        title: 'Total Price',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
        render: (price) => `$${price.toFixed(2)}`,
    },
    {
        title: 'Order Status',
        dataIndex: 'orderStatus',
        key: 'orderStatus',
        render: (status) => (
            <Tag color={status === 'completed' ? 'green' : 'blue'}>{status}</Tag>
        ),
    },
    {
        title: 'Payment Status',
        dataIndex: 'paymentStatus',
        key: 'paymentStatus',
        render: (status) => (
            <Tag color={status === 'paid' ? 'green' : 'orange'}>{status}</Tag>
        ),
    },
    {
        title: 'Payment Type',
        dataIndex: 'paymentType',
        key: 'paymentType',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (date) => moment(date).format('YYYY-MM-DD HH:mm'),
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
            <Select
                defaultValue={record.orderStatus}
                onChange={(value) => updateOrderStatus(record.orderId, value)}
                style={{ width: 120 }}
            >
                <Select.Option value="pending">Pending</Select.Option>
                <Select.Option value="processing">Processing</Select.Option>
                <Select.Option value="completed">Completed</Select.Option>
                <Select.Option value="cancelled">Cancelled</Select.Option>
            </Select>
        ),
    },
];

return (
    <div style={{ padding: '20px' }}>
        <h1>Order Management</h1>
        
        <Space style={{ marginBottom: '20px' }}>
            <Select
                placeholder="Filter by status"
                style={{ width: 150 }}
                value={filters.status}
                onChange={(value) => setFilters({ ...filters, status: value })}
            >
                <Select.Option value="all">All Status</Select.Option>
                <Select.Option value="pending">Pending</Select.Option>
                <Select.Option value="processing">Processing</Select.Option>
                <Select.Option value="completed">Completed</Select.Option>
                <Select.Option value="cancelled">Cancelled</Select.Option>
            </Select>

            <DatePicker.RangePicker
                onChange={(dates) =>
                    setFilters({
                        ...filters,
                        startDate: dates?.[0],
                        endDate: dates?.[1],
                    })
                }
            />

            <Input
                placeholder="Search by customer"
                style={{ width: 200 }}
                value={filters.customer}
                onChange={(e) =>
                    setFilters({ ...filters, customer: e.target.value })
                }
            />
        </Space>

        <Table
            columns={columns}
            dataSource={filteredOrders}
            loading={loading}
            rowKey="orderId"
        />
    </div>
);
};

export default OrderManagement;