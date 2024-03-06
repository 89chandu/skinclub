import './PopUp.css';

function PopUp() {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <img className="popup-content1" src="select.png" alt="" />
        <h1 className="popup-content1">Payment Successful</h1>
        <h3 className="popup-content1">Order ID #7864</h3>
        <div className="ul-container">
          <span>Payment Type:</span>
          <span>Net Banking</span>
        </div>
        <div className="ul-container">
          <span>Bank:</span>
          <span>HDFC</span>
        </div>
        <div className="ul-container">
          <span>Mobile:</span>
          <span>+91 12345 67890</span>
        </div>
        <div className="ul-container">
          <span>Email:</span>
          <span>bdebashis182@gmail.com</span>
        </div>
        <div className="ul-container1">
          <span>Amount Paid</span>
          <span>$180.00</span>
        </div>
        <div className="ul-container2">
          <span>Transaction ID</span>
          <span>#123456789065432</span>
        </div>
        <div className="par">
          <div className="point">
            <div className="cen">
              <img src="reward.png" alt="" /> 480Points
            </div>
          </div>
        </div>
        <button className="close-btn">
          <img src="upload.png" alt="" /> Send to mail
        </button>
        <button className="close-btn">Claim reward point</button>
      </div>
    </div>
  );
}

export default PopUp;