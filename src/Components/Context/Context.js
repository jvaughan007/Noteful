import React from "react";

const Context = React.createContext({
  folders: [],
  notes: [],
  updateStore: () => {},
  url: "http://localhost:8000",
});

export default Context;
