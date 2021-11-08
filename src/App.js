import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/search" exact element={<SearchResult />} />
    </Routes>
  );
}

export default App;
