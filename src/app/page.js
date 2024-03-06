// pages/index.js or Home.js
'use client'
import React, { useState } from 'react';
import Header from "./component/Header/Header";
import Sidebar from "./component/sidebar/sidebar";
import Center from "./component/Center/Center";
import NavigationBar from './component/Navigationbar';
import CreateInvoice from "./component/createinovice/createInvoices";
import EditInvoice from "./component/EditInvoice/EditInvoice";
import PaymentForm from './component/Paymentform/PaymentForm';
import Invoice from "./component/invoice/Center";
import Payment from './component/payment/payment';
import PopUp from './component/PopUp/PopUp';
import styles from "./page.module.css";

export default function Home() {
  const [displayedComponent, setDisplayedComponent] = useState('Center');

  return (
    <>    
      <Header setDisplayedComponent={setDisplayedComponent} />
      <div className={styles.mainStyle}>
      
        <Sidebar />
      
        {/* <NavigationBar setDisplayedComponent={setDisplayedComponent} /> */}
        
        {displayedComponent === 'Center' && <Center />}
{displayedComponent === 'CreateInvoice' && <CreateInvoice />}
{displayedComponent === 'EditInvoice' && <EditInvoice />}
{displayedComponent === 'Invoice' && <Invoice />}
{displayedComponent === 'PaymentForm' && <PaymentForm />}
{displayedComponent === 'Payment' && <Payment />}
{displayedComponent === 'PopUp' && <PopUp />}


      </div>
    </>
  );
}
