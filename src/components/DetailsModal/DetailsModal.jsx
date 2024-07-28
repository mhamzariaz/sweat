import React, { useState } from "react";
import "./DetailsModal.css";
import MyTable from "../EditableTable/Table";
import MyTable2 from "../EditableTable/Table2.jsx";

const DetailsModal = ({ toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-btn" onClick={toggleModal}>
          &times;
        </span>
        <div className="table-div" style={{display: 'flex', flexDirection: 'column'}}>
          <MyTable />
          <MyTable2/>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
