import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/sidebar/sidebar";
import Center from "./component/Center/Center";
import Invoice from "./component/invoice/Center";

export default function Home() {
  return (
    <>    
    <Header/>
    <div className={styles.mainStyle}>
      <Sidebar/>
      <Center/>
      {/* <Invoice/> */}
    </div>
    </>
  );
}
