import React from 'react';
import Template from './Template.module.css';
function Minitemplate() {
  return (
    <>
      <div className={Template.Forms}>
        <div>
          <label htmlFor="uname">Select Person</label>
          <select type="text" placeholder="Enter Username" name="uname" className={Template.input} required>
            <option value="Select the person to whom you will send this">Select the person to whom you will send this</option>
          </select>
        </div>
        <div>
          <label htmlFor="uname">Invoice Number</label>
          <input type="text" placeholder="Enter Username" name="uname" className={Template.input} required/>
        </div>
        <div>
          <label htmlFor="uname">Add a Treatment</label>
          <select type="text" placeholder="Enter Username" name="uname" className={Template.input} required>
          <option value="Select the person to whom you will send this">Select the person to whom you will send this</option>
          </select>
        </div>
        <div>
          <label htmlFor="uname">Select Date</label>
          <input type="text" placeholder="Enter Username" name="uname" className={Template.input} required/>
        </div>
      </div>
    </>
  )
}

export default Minitemplate;
