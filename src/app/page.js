import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/sidebar/sidebar";
import Center from "./component/Center/Center";
import Invoice from "./component/invoice/Center";
import CreateInvoice from "./component/createinovice/createInvoices";
import Gridview from "./component/Gridview/Gridview";
import EditInvoice from "./component/EditInvoice/EditInvoice";
import PaymentForm from "./component/Paymentform/Paymentform";

export default function Home() {
  return (
    <>    
    <Header/>
    <div className={styles.mainStyle}>
      <Sidebar/>
      {/* <Center/> */}
      {/* <CreateInvoice/> */}
      {/* <Gridview/> */}
       {/* <EditInvoice/> */}
       {/* <PaymentForm/> */}
      <Invoice/>
    </div>
    </>
  );
}
