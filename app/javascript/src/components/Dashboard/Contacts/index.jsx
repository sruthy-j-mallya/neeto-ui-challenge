import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { DUMMY_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import CreatePane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreatePane, setShowCreatePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              size="small"
              onClick={() => setShowCreatePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table
          handleDelete={() => setShowDeleteAlert(true)}
          tableData={DUMMY_DATA}
        />
        <CreatePane setShowPane={setShowCreatePane} showPane={showCreatePane} />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
