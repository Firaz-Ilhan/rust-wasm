const wasm = import("../pkg/rust_wasm");
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Test from "./components/Test";
import './index.css';

wasm.then(wasm => {
  const App = () => {
    return (
      <div>
        <Header title="Rust webassembly test" />
        <button onClick={wasm.greet}>Hello from rust</button>
        <Test func={wasm.fib} title="Fibonacci sequence" />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
})