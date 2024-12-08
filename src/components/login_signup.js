import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, Dropdown } from "react-bootstrap";
import { FaGoogle, FaEnvelope } from "react-icons/fa";

const LoginModal = ({ show, onClose }) => {
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleContinue = () => {
    setShowOtpModal(true); // Show OTP confirmation modal
    onClose(); // Close login modal
  };

  const handleOtpClose = () => {
    setShowOtpModal(false); // Close OTP modal
  };

  return (
    <>
      {/* Login Modal */}
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
            Log In or Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "32px" }}>
          {/* Welcome Text */}
          <h4
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "#005B96", // Blue color
              textAlign: "left",
            }}
          >
            Welcome to EazyAds
          </h4>

          {/* Phone Input */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup
                style={{
                  border: "1px solid #CED4DA",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <Dropdown>
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "none",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                      padding: "12px",
                      fontSize: "16px",
                      color: "#495057",
                    }}
                  >
                    +91
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>+1</Dropdown.Item>
                    <Dropdown.Item>+44</Dropdown.Item>
                    <Dropdown.Item>+91</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                  type="text"
                  placeholder="Enter your number here"
                  style={{
                    border: "none",
                    boxShadow: "none",
                    padding: "12px 16px",
                    backgroundColor: "transparent",
                    fontSize: "16px",
                    flex: 1,
                  }}
                />
              </InputGroup>
              <Form.Text className="text-muted" style={{ fontSize: "12px" }}>
                An OTP will be sent to this number for verification.
              </Form.Text>
            </Form.Group>

            {/* Continue Button */}
            <Button
              variant="primary"
              className="w-100 mb-4"
              style={{
                backgroundColor: "#005B96",
                borderColor: "#005B96",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "24px",
              }}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </Form>

          {/* OR Separator */}
          <div
            className="text-center mb-4"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <hr
              style={{
                flex: 1,
                borderTop: "1px solid #CCCCCC", // Brighter line color
              }}
            />
            <span
              style={{
                margin: "0 12px",
                fontSize: "14px",
                color: "#6C757D",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              OR
            </span>
            <hr
              style={{
                flex: 1,
                borderTop: "1px solid #CCCCCC", // Brighter line color
              }}
            />
          </div>

          {/* Continue with Google */}
          <Button
            variant="outline-primary"
            className="d-flex align-items-center w-100 mb-3"
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "24px",
              borderColor: "#005B96",
            }}
          >
            <FaGoogle
              style={{
                fontSize: "20px",
                color: "#EA4335",
                marginRight: "16px", // Space between icon and text
              }}
            />
            <span style={{ flex: 1, textAlign: "center" }}>
              Continue with Google
            </span>
          </Button>

          {/* Continue with Email */}
          <Button
            variant="outline-primary"
            className="d-flex align-items-center w-100"
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "24px",
              borderColor: "#005B96",
            }}
          >
            <FaEnvelope
              style={{
                fontSize: "20px",
                color: "#6C757D",
                marginRight: "16px", // Space between icon and text
              }}
            />
            <span style={{ flex: 1, textAlign: "center" }}>
              Continue with Email
            </span>
          </Button>
        </Modal.Body>
      </Modal>

      {/* OTP Confirmation Modal */}
      <Modal
        show={showOtpModal}
        onHide={handleOtpClose}
        centered
        style={{
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Modal.Header
          closeButton
          style={{
            borderBottom: "1px solid #CCCCCC",
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
          <p
            style={{
              fontSize: "14px",
              color: "#6C757D",
              marginBottom: "24px",
            }}
          >
            Enter the code we’ve sent via SMS to 7893846512
          </p>
          <Form>
            <InputGroup
              style={{
                justifyContent: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              {[...Array(4)].map((_, i) => (
                <Form.Control
                  key={i}
                  style={{
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                    fontSize: "18px",
                    borderRadius: "8px",
                    border: "1px solid #CED4DA",
                  }}
                />
              ))}
            </InputGroup>
            <div className="d-flex justify-content-between">
              <Button
                variant="outline-primary"
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
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
