import React from "react";

import dayjs from "dayjs";
import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Tooltip, Avatar, Tag } from "neetoui";

const { Menu, MenuItem } = Dropdown;

const Note = ({ note }) => (
  <div className="mb-3 w-full border border-gray-300 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 ">
    <div className="flex justify-between">
      <Typography style="h4" weight="bold">
        {note.title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button>Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
    <div className="mb-2">
      <Typography style="body2">{note.description}</Typography>
    </div>
    <hr />
    <div className="flex justify-between">
      <div className="mt-3">
        <Tag label="Getting Started" size="small" />
      </div>
      <div className="mt-3 flex items-center space-x-1">
        <Clock size="15" />
        <Tooltip
          content={dayjs(note.createdAt).format("dddd, hh:mmA")}
          position="bottom"
        >
          <Typography style="body3">
            {`${note.status} ${dayjs(note.createdAt).fromNow()} `}
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

export default Note;
