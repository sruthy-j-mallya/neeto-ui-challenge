import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES_CARD_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import Note from "./Note";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState(NOTES_CARD_DATA);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [showNewNotePane, setShowNewNotePane] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add new note"
              size="small"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length > 0 ? (
          <>
            {notes.map(note => (
              <Note
                key={note.id}
                note={note}
                setSelectedNoteId={setSelectedNoteId}
                setShowDeleteAlert={setShowDeleteAlert}
              />
            ))}
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add new note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteId={selectedNoteId}
            setNotes={setNotes}
            setSelectedNoteId={setSelectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
