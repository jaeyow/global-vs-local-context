import AppContextProvider from "./AppContext";
import { Card } from "./Card";
import "./styles.css";

export default function UsingLocalContext() {
  const counters = [1, 2, 3];
  return (
    <div className="App">
      <h1>Using Local Context</h1>
      {counters.map((c) => {
        return (
          <div key={c} className="Counter">
            <AppContextProvider>
              <Card name={`Counter ${c}`} />
            </AppContextProvider>
          </div>
        );
      })}
    </div>
  );
}
