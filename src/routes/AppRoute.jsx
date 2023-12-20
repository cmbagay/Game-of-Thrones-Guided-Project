import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Character from "../pages/Character/Character";
import Houses from "../pages/Houses/Houses";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character?page=1&pageSize-10" element={<Characters />} />
      <Route path="/character/:id" element={<Character/>} />
      <Route path="/houses?page=1&pageSize-10/" element={<Houses />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoute;
