// components/NavigationBar.js
'use strict'; // Fix the typo here
import React, { useState } from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = ({ setDisplayedComponent }) => {
  function handleComponentChange(componentName) {
    console.log('====================================');
    console.log(componentName);
    console.log('====================================');
    setDisplayedComponent(componentName);
  }

  return (
    <div className={styles.navBar}>
        <button onClick={() => handleComponentChange('CreateInvoice')}>Create Invoice</button>
        <button onClick={() => handleComponentChange('Invoice')}>Invoice</button>
         <button onClick={() => handleComponentChange('Center')}>Center</button>
        
      <button onClick={() => handleComponentChange('EditInvoice')}>Edit Invoice</button>
      
      <button onClick={() => handleComponentChange('PaymentForm')}>Payment Form</button>
      <button onClick={() => handleComponentChange('Payment')}>Payment</button>
      <button onClick={() => handleComponentChange('PopUp')}>PopUp</button>
     
      
    </div>
  );
};

export default NavigationBar;
