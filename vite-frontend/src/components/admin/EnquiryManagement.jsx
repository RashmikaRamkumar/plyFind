import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnquiryManagement = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api//admin/enquiries');
            setEnquiries(response.data);
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        }
    };

    const updateStatus = async (id, status, adminResponse) => {
        try {
            await axios.put(`/api/admin/enquiries/${id}/status`, { status, adminResponse });
            fetchEnquiries();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSort = (field) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredEnquiries = enquiries.filter((enquiry) =>
        enquiry.fullName.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedEnquiries = [...filteredEnquiries].sort((a, b) => {
        if (sortField) {
            const aValue = a[sortField];
            const bValue = b[sortField];
            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div>
            <h1>Enquiry Management</h1>

            <div>
                <input
                    type="text"
                    placeholder="Filter by name"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('fullName')}>Full Name</th>
                        <th onClick={() => handleSort('email')}>Email</th>
                        <th onClick={() => handleSort('phoneNumber')}>Phone Number</th>
                        <th onClick={() => handleSort('subject')}>Subject</th>
                        <th>Message</th>
                        <th onClick={() => handleSort('status')}>Status</th>
                        <th>Admin Response</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedEnquiries.map((enquiry) => (
                        <tr key={enquiry.id}>
                            <td>{enquiry.fullName}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.phoneNumber}</td>
                            <td>{enquiry.subject}</td>
                            <td>{enquiry.message}</td>
                            <td>{enquiry.status}</td>
                            <td>{enquiry.adminResponse}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        updateStatus(enquiry.id, 'Resolved', 'Thank you for your patience.')
                                    }
                                >
                                    Mark as Resolved
                                </button>
                                <button
                                    onClick={() =>
                                        updateStatus(enquiry.id, 'Pending', 'We are reviewing your enquiry.')
                                    }
                                >
                                    Mark as Pending
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnquiryManagement;