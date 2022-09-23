import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Tooltip, Avatar, Tag } from "neetoui";

import { formatCreatedAt, calculateCreatedAgo } from "./utils";

const Note = ({ note, setShowDeleteAlert, setSelectedNoteId }) => {
  const { Menu, MenuItem } = Dropdown;

  const handleDelete = () => {
    setShowDeleteAlert(true);
    setSelectedNoteId(note.id);
  };

  return (
    <div className="mb-3 w-full border border-gray-300 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 ">
      <div className="flex justify-between">
        <Typography style="h4" weight="bold">
          {note.title}
        </Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <Menu>
            <MenuItem.Button>Edit</MenuItem.Button>
            <MenuItem.Button style="danger" onClick={handleDelete}>
              Delete
            </MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
      <Typography className="mb-2" style="body2">
        {note.description}
      </Typography>
      <hr />
      <div className="mt-3 flex justify-between">
        <Tag label="Getting Started" size="small" />
        <div className="flex items-center space-x-1">
          <Clock size="15" />
          <Tooltip content={formatCreatedAt(note.createdAt)} position="bottom">
            <Typography style="body3">
              {`${note.status} ${calculateCreatedAgo(note.createdAt)}`}
            </Typography>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              name: "Oliver Smith",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
