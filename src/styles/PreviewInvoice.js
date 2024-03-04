// src/pages/PreviewInvoice.js
import React from 'react';
import '../styles/PreviewInvoice.css';

// Import your styles

const PreviewInvoice = () => {
  return (
    <div className="preview-invoice-container">
      <h1>Preview Invoice</h1>

      {/* Company Logo and Summary */}
      <div className="invoice-summary">
        <div className="company-logo">
          {/* Add your company logo image here */}
          <img src={`skinclub.png`} alt="Company Logo" />

        </div>
        <div className="summary-text">
  <p>Summary</p>
  <hr style={{ height: '23%', width: '0.01em', position: 'absolute', left: '65.9%', top: '5.5%' }} />
  <p>Doctor: Dr. John Doe</p>
</div>

      </div>

      {/* Patient Information */}
      <div className="patient-info">
        <div className="patient-name">
          <p>Patient: John Smith</p>
        </div>
      </div>

      {/* Items List */}
      <div className="items-lists">
        <h2>Items</h2>
        <table className="invoice-tables">
          <thead>
            <tr>
              <th>Item</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your list items here */}
            <tr>
              <td>Item 1</td>
              <td>$10</td>
              <td>2</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>$15</td>
              <td>3</td>
              <td>$45</td>
            </tr>
            {/* Add more items as needed */}
          </tbody>
        </table>

        {/* Subtotal, Discount, and Tax */}
        <div className="invoice-summary">
          <div className="subtotal">
            <p>Subtotal: $65</p>
          </div>
          <div className="discount">
            <p>Discount: $5</p>
          </div>
          <div className="tax">
            <p>Tax: $7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewInvoice;
