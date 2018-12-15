import React from "react";
import ReactDOM from "react-dom";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostList from "./Posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
