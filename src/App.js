import { Routes, Route } from "react-router";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import SearchResultPage from "./pages/SearchResultPage";
import AddressResultPage from "./pages/AddressResultPage";
const history = createBrowserHistory();
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route
        path="/search"
        element={
          <SearchResultPage location={history.location} navigator={history} />
        }
      />
      <Route path="/location" element={<AddressResultPage />} />
    </Routes>
  );
}

export default App;
