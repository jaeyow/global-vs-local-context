import React, { useState } from "react";

const defaultValue = {
  counter: 0,
  incrementCounter: () => {},
  decrementCounter: () => {},
  name: "",
  setName: () => {}
};

export const AppContext = React.createContext(defaultValue);

const AppContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  return (
    <AppContext.Provider
      value={{
        counter,
        incrementCounter: () => {
          setCounter((ctr) => ctr + 1);
        },
        decrementCounter: () => {
          setCounter((ctr) => (ctr > 0 ? ctr - 1 : 0));
        },
        name,
        setName
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
