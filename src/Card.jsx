import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

export const Card = ({ name }) => {
  const context = useContext(AppContext);
  useEffect(() => {
    context.setName(name);
  });

  return (
    <>
      <div>{`Counter: ${context.name}`}</div>
      <div>{`Counter value: ${context.counter}`}</div>
      <button onClick={context.incrementCounter}>Increment</button>
      <button onClick={context.decrementCounter}>Decrement</button>
    </>
  );
};
