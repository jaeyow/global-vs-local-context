import AppContextProvider from "./AppContext";
import { Card } from "./Card";
import "./styles.css";

export default function UsingGlobalContext() {
  const counters = [1, 2, 3];
  return (
    <div className="App">
      <h1>Using Global Context</h1>
      <AppContextProvider>
        {counters.map((c) => {
          return (
            <div key={c} className="Counter">
              <Card name={`Counter ${c}`} />
            </div>
          );
        })}
      </AppContextProvider>
    </div>
  );
}
