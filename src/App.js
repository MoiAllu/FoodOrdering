import {Fragment} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
