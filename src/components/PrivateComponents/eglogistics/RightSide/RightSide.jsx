import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

export default function RightSide() {
  return (
    <div className="RightSide">
      <div>
        <h3>Canvass Sheet</h3>
        <Updates />
      </div>
      <div>
        <h3>Purchase History</h3>
        <CustomerReview />
      </div>
    </div>
  );
}
