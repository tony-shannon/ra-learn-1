import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const EventList = props => {
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>;
};

export default EventList;
