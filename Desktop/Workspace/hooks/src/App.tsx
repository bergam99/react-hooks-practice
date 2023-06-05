import { Fragment } from "react";
import UseStateComponent from "./UseStateComponent";
import UseEffectCpnt from "./UseEffectCpnt";
import UseContext from "./useContext";

function App() {
  return (
    <Fragment>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectCpnt />
      <h1>UseContext</h1>
      <UseContext></UseContext>
    </Fragment>
  );
}

export default App;
