import React, { useState } from "react";

const WishlistDeleteDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const confirmDelete = () => {
    // Handle delete logic here
    console.log("Wishlist deleted");
    closeDialog();
  };

  return (
    <div>
      <button onClick={openDialog}>Delete Wishlist</button>

      {isDialogOpen && (
        <div style={styles.overlay}>
          <div style={styles.dialog}>
            <h3>Delete this wishlist?</h3>
            <p>This item will be removed permanently.</p>
            <div style={styles.actions}>
              <button onClick={closeDialog} style={styles.cancelButton}>
                Cancel
              </button>
              <button onClick={confirmDelete} style={styles.confirmButton}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  dialog: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    width: "300px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  confirmButton: {
    backgroundColor: "#007BFF",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default WishlistDeleteDialog;
