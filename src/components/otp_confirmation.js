import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const OtpConfirmationModal = ({ show, onClose, phoneNumber = "7893846512" }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    if (!/^\d{0,7}$/.test(value)) {
      // Allow only up to 7 digits
      e.target.value = value.slice(0, 7);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      style={{
        borderRadius: "16px", // Rounded corners for the modal
        overflow: "hidden", // Ensure no content spills out
      }}
      dialogClassName="rounded-modal"
    >
      <Modal.Header
        closeButton
        style={{
          borderBottom: "1px solid #CCCCCC", // Brighter separator line
          padding: "16px 24px",
        }}
      >
        <Modal.Title
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
          }}
        >
          Confirm your number
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "32px" }}>
        {/* OTP Message */}
        <p
          style={{
            fontSize: "14px",
            color: "#6C757D",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Enter the code we’ve sent via SMS to <strong>{phoneNumber}</strong>
        </p>

        {/* Single OTP Input Field */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <Form.Control
            type="text"
            maxLength="7"
            onChange={handleInputChange}
            placeholder="-------"
            style={{
              width: "300px",
              height: "50px",
              textAlign: "center",
              fontSize: "24px",
              letterSpacing: "10px", // Add spacing between characters
              borderRadius: "12px",
              border: "1px solid #CED4DA",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <Button
            variant="outline-primary"
            onClick={() => console.log("Resend OTP clicked")}
            style={{
              borderColor: "#005B96",
              color: "#005B96",
              borderRadius: "24px",
              padding: "12px 24px",
              fontWeight: "bold",
            }}
          >
            Resend OTP
          </Button>
          <Button
            variant="primary"
            onClick={() => console.log("Continue clicked")}
            style={{
              backgroundColor: "#005B96",
              borderColor: "#005B96",
              borderRadius: "24px",
              padding: "12px 24px",
              fontWeight: "bold",
            }}
          >
            Continue
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OtpConfirmationModal;
