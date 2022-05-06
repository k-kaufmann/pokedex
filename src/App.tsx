import Pokelist from "./components/pokelist/Pokelist";
import Navigation from "./components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/pokemon">
          <Route index element={<Pokelist></Pokelist>}></Route>
          <Route path=":pokemon" element={<Pokemon></Pokemon>}></Route>
        </Route>
        <Route path="/temtem" element={<h1>TEMTEM</h1>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
