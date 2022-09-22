import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES_CARD_DATA as notesData } from "./constants";
import Menu from "./Menu";
import Note from "./Note";

const Notes = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add new note"
              size="small"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notesData.length ? (
          <>
            {notesData.map(note => (
              <Note key={note.id} note={note} />
            ))}
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add new note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
