import { Routes, Route } from "react-router";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import SearchResultPage from "./pages/SearchResultPage";
import AddressResultPage from "./pages/AddressResultPage";
import TypeResultPage from "./pages/TypeResult.Page";

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
      <Route path="/type" element={<TypeResultPage />} />
    </Routes>
  );
}

export default App;
