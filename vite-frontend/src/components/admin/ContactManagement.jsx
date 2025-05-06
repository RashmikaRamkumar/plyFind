import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactManagement = () => {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState("desc");
    const [response, setResponse] = useState("");
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const { data } = await axios.get("/api/contacts");
            setContacts(data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    const handleResponseSubmit = async (contactId) => {
        try {
            await axios.post(`/api/contacts/${contactId}/respond`, { adminResponse: response });
            setResponse("");
            setSelectedContact(null);
            fetchContacts();
        } catch (error) {
            console.error("Error submitting response:", error);
        }
    };

    const filteredContacts = contacts.filter((contact) => {
        if (filter === "all") return true;
        if (filter === "responded") return contact.adminResponse;
        if (filter === "unresponded") return !contact.adminResponse;
        return true;
    });

    const sortedContacts = filteredContacts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return (
        <div>
            <h1>Contact Management</h1>
            <div>
                <label>
                    Filter:
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="responded">Responded</option>
                        <option value="unresponded">Unresponded</option>
                    </select>
                </label>
                <label>
                    Sort by Date:
                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Admin Response</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedContacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.fullName}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.subject}</td>
                            <td>{contact.message}</td>
                            <td>{contact.adminResponse || "No response yet"}</td>
                            <td>
                                <button onClick={() => setSelectedContact(contact)}>Respond</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedContact && (
                <div>
                    <h2>Respond to {selectedContact.fullName}</h2>
                    <textarea
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        placeholder="Write your response here..."
                    />
                    <button onClick={() => handleResponseSubmit(selectedContact.id)}>Submit Response</button>
                    <button onClick={() => setSelectedContact(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default ContactManagement;