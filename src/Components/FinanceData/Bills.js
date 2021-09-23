import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Bills() {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  return (
    <div>
      <div>
        <h4 className="Question">What are your reacquiring monthly bills?</h4>
        <p className="Label">Utilities</p>
        <input
          className="MonthBills"
          step="50"
          min="0"
          max="2500"
          type="number"
        />
        <p className="Label">Rent</p>
        <input
          className="MonthBills"
          step="50"
          min="0"
          max="2500"
          type="number"
        />
        <p className="Label">Insurance</p>
        <input
          className="MonthBills"
          step="50"
          min="0"
          max="2500"
          type="number"
        />
      </div>
      <button className="AddBtn Custom" onClick={openForm}>
        Add Custom Bill
      </button>
      <Modal
        className="AddBudgetModel"
        centered
        show={showForm}
        onHide={closeForm}
      >
        <Modal.Header>
          <Modal.Title>Add A Monthly Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="Name of item" />
          <input type="number" step="5" placeholder="Amount" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeForm}>
            Submit
          </Button>
          <Button variant="secondary" onClick={closeForm}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <button>Set Monthly bill Data</button>
    </div>
  );
}

export default Bills;
