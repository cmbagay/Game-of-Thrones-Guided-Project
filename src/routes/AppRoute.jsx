import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Character from "../pages/Character/Character";
import Characters from "../pages/Characters/Characters";
import Houses from "../pages/Houses/Houses";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character" element={<Character />} />
      <Route path="/character/:id" element={<Characters/>} />
      <Route path="/houses" element={<Houses />} />
      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
}

export default AppRoute;
