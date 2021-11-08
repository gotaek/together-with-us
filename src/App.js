import { Routes, Route } from "react-router";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
const history = createBrowserHistory();
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route
        path="/search"
        exact
        element={
          <SearchResult location={history.location} navigator={history} />
        }
      />
    </Routes>
  );
}

export default App;
