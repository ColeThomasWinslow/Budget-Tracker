import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Budget() {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  return (
    <div>
      <div className="Box">
        <h3 className="Title">Budget</h3>

        <h4 className="Income Monthly">Monthly Income:</h4>
        <p className="MonthInc">$5,416</p>
        <div className="Statement">
          <p className="Label"> Utilities</p>
          <p className="Negative">$400</p>
        </div>
        <div className="Statement">
          <p className="Label"> Mortgage</p>
          <p className="Negative">$975</p>
        </div>
        <div className="Statement">
          <p className="Label">Babysitter</p>
          <p className="Negative">$600</p>
        </div>
        <div className="Statement">
          <p className="Label"> Car Payment</p>
          <p className="Negative">$230</p>
        </div>
        <div>
          <button className="AddBtn" onClick={openForm}>
            + Add Budget Item
          </button>
        </div>
        <Modal
          className="AddBudgetModel"
          centered
          show={showForm}
          onHide={closeForm}
        >
          <Modal.Header>
            <Modal.Title>Add Budget Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="number" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Budget;
