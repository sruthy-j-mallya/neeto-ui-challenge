import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";

import { DUMMY_CONTACTS_DATA } from "./constants";
import Menu from "./Menu";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchString, setSearchString] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" size="small" />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <SubHeader
          deleteButtonProps={{
            count: 0,
            selectedIDs: [],
            onClick: () => {},
          }}
          disableButtonProps={{
            count: 0,
            selectedIDs: [],
            onClick: () => {},
          }}
          searchProps={{
            value: searchString,
            onChange: e => setSearchString(e.target.value),
          }}
        />
        <Table tableData={DUMMY_CONTACTS_DATA} />
      </Container>
    </>
  );
};

export default Contacts;
