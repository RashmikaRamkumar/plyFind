import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("enquiries");
  const [enquiries, setEnquiries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("all");

  useEffect(() => {
    fetchEnquiries();
    fetchContacts();
  }, []);

  const fetchEnquiries = () => {
    fetch("https://plyfind.onrender.com/api/admin/enquiries")
      .then((res) => res.json())
      .then((data) => setEnquiries(data));
  };

  const fetchContacts = () => {
    fetch("https://plyfind.onrender.com/api/admin/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  };

  // Get unique subjects from enquiries
  const uniqueSubjects = [
    "all",
    ...new Set(enquiries.map((enq) => enq.subject)),
  ];

  // Filter enquiries based on selected subject
  const filteredEnquiries =
    selectedSubject === "all"
      ? enquiries
      : enquiries.filter((enq) => enq.subject === selectedSubject);

  const updateEnquiryStatus = async (id, status) => {
    try {
      const response = await fetch(
        `https://plyfind.onrender.com/api/admin/enquiries/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (response.ok) {
        fetchEnquiries(); // Refresh the list
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "done":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Rakesh Glass & Plywoods
          </h1>
          <h2 className="text-xl text-gray-600">Admin Dashboard</h2>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
        >
          Logout
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "enquiries" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("enquiries")}
        >
          Enquiries
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "contacts" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("contacts")}
        >
          Messages
        </button>
      </div>

      <div className="bg-white rounded shadow p-6">
        {activeTab === "enquiries" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Enquiries</h2>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {uniqueSubjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </option>
                ))}
              </select>
            </div>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Message</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnquiries.map((enq) => (
                  <tr key={enq._id} className="border-t">
                    <td className="px-4 py-2">{enq.fullName}</td>
                    <td className="px-4 py-2">{enq.email}</td>
                    <td className="px-4 py-2">{enq.phoneNumber}</td>
                    <td className="px-4 py-2">{enq.subject}</td>
                    <td className="px-4 py-2">{enq.message}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${getStatusBadgeColor(
                          enq.status
                        )}`}
                      >
                        {enq.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      {enq.status !== "done" && (
                        <button
                          onClick={() => updateEnquiryStatus(enq._id, "done")}
                          className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600"
                        >
                          Mark Done
                        </button>
                      )}
                      {enq.status === "pending" && (
                        <button
                          onClick={() =>
                            updateEnquiryStatus(enq._id, "rejected")
                          }
                          className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                        >
                          Reject
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeTab === "contacts" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((msg, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2">{msg.fullName}</td>
                    <td className="px-4 py-2">{msg.phoneNumber}</td>
                    <td className="px-4 py-2">{msg.subject}</td>
                    <td className="px-4 py-2">{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
