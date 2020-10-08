import React from "react";

const Context = React.createContext({
  folders: [],
  notes: [],
  updateStore: () => {},
  url: "http://localhost:9090",
});

export default Context;
