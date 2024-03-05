// Gridview.js
import React from "react";
import EditStyles from "./EditInvoice.module.css";
import PreviewInvoice from "../PreviewInvoice/PreviewInvoice";

import Gridview from "../Gridview/Gridview";

function EditInvoice() {
  return <div>

    <PreviewInvoice/>
    <Gridview/>

  </div>;
}

export default EditInvoice;
