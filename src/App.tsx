import Pokelist from "./components/pokelist/Pokelist";
import Navigation from "./components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/pokemon" element={<Pokelist />}></Route>
        <Route path="/temtem" element={<h1>TEMTEM</h1>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
