const wasm = import("../pkg/rust_wasm");
import ReactDOM from "react-dom";

wasm.then(wasm => {
  const App = () => {
    return (
      <div>
        <h1>wasm test</h1>
        <button onClick={wasm.greet}>very heavy computation</button>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
})