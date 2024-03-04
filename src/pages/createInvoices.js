// src/pages/CreateInvoice.js
"use client";
import React, { useState } from 'react';
import '../styles/createInvoices.css'; 

const CreateInvoice = () => {
  const initialItems = [
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "Paid" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    { patient: "Jane Smith", time: "11:30 AM", date: "2024-03-11", total: "$150", status: "Pending" },
    // Add more demo items as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState(10);
  const [sortByDate, setSortByDate] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewMoreClick = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const handleSortByDateChange = (e) => {
    setSortByDate(e.target.value);
  };

  const filteredItems = initialItems.filter((item) =>
    item.patient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the items by date if sortByDate is selected
  const sortedItems = sortByDate
    ? filteredItems.sort((a, b) => new Date(a.date) - new Date(b.date))
    : filteredItems;

  const displayedItems = sortedItems.slice(0, visibleItems);

  return (
    <div className="create-invoice-container">
      <h1>Invoice</h1>
      <h2>Invoice list</h2>

      <div className="invoice-card">
        <div className="search-bar-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by patient name..."
            className="search-bar"
          />
          <select
            value={sortByDate}
            onChange={handleSortByDateChange}
            className="date-sort-dropdown"
          >
            <option value="" disabled>
              Sort by date
            </option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Time</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={index}>
                <td>{item.patient}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
                <td>{item.total}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredItems.length > visibleItems && (
          <button className="view-more-button" onClick={handleViewMoreClick}>
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateInvoice;