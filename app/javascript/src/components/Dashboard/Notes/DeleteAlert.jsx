import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({
  onClose,
  selectedNoteId,
  setNotes,
  setSelectedNoteId,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      setNotes(oldNotes => oldNotes.filter(note => note.id !== selectedNoteId));
      onClose();
      setSelectedNoteId(0);
      Toastr.success("Note deleted successfully.");
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to delete this note? This cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
