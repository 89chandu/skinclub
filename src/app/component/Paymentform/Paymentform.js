// components/PaymentForm.js
import React from 'react';
import styles from './PaymentForm.module.css';

const PaymentForm = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Your payment form HTML structure goes here */}

      <div className="main_container">
    <div className="heading">
      <h2>Payment</h2>
      <p>Create a invoice for your patient</p>
    </div>
    <div className="PayMent-body">
      <form>
        <div className="pay-method">
          <h2>Payment Method</h2>
          <div className="pay-options">
            <input type="radio" id="card" name="pay_option" />
            <label htmlFor="card">Credit/debit card</label>
            <input type="radio" id="banking" name="pay_option" />
            <label htmlFor="banking">Net Banking</label>
            <input type="radio" id="paypal" name="pay_option" />
            <label htmlFor="paypal">Paypal</label>
            <input type="radio" id="bitcoin" name="pay_option" />
            <label htmlFor="bitcoin">Bitcoin</label>
          </div>
        </div>
        <div className="payment-details">
          <h2>Add Payment Details</h2>
          <div className="details_input">
            <div>
              <label htmlFor="">Enter Name on card</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Card Number</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Expiry(MM/YY)</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">CVV Code</label>
              <br />
              <input type="text" />
            </div>
          </div>
        </div>
        <p className="terms-para">
          By clicking on 'confirm Payment'{" "}
          <b>
            <u>I agree with the Terms and conditions</u>
          </b>{" "}
          of the Company.
        </p>
        <div className="buttons">
          <button className="save-button">save</button>
          <button className="conform-button">Conform Payment</button>
        </div>
      </form>
    </div>
  </div>
  
    {/* </div> */}


    </div>
  );
};

export default PaymentForm;
