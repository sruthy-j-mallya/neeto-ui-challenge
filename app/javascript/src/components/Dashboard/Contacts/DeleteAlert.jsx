import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    try {
      setDeleting(true);
      onClose();
      Toastr.success("Contact deleted successfully.");
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to delete this contact? This cannot be undone."
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
