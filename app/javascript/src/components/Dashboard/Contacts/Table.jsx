import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Avatar, Typography, Table as NeetoUITable } from "neetoui";

const { Menu, MenuItem } = Dropdown;

const renderUser = ({ name, role }) => (
  <div className="flex space-x-2">
    <Avatar
      size="medium"
      user={{
        name,
      }}
    />
    <div className="flex flex-col">
      <Typography style="h5">{name}</Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

const renderActionDropdown = handleDelete => (
  <Dropdown buttonStyle="text" icon={MenuVertical}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button style="danger" onClick={handleDelete}>
        Delete
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);

const Table = ({ tableData, handleDelete }) => (
  <NeetoUITable
    allowRowClick
    rowSelection
    currentPageNumber={1}
    defaultPageSize={8}
    handlePageChange={() => {}}
    rowData={tableData}
    columnData={[
      {
        dataIndex: "user",
        key: "user",
        title: "NAME & ROLE",
        width: "30%",
        render: renderUser,
      },
      {
        dataIndex: "email",
        key: "email",
        title: "EMAIL",
        width: "30%",
      },
      {
        dataIndex: "createdAt",
        key: "createdAt",
        title: "CREATED AT",
        width: "30%",
      },
      {
        key: "actions",
        title: "",
        width: "10%",
        render: () => renderActionDropdown(handleDelete),
      },
    ]}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);

export default Table;
