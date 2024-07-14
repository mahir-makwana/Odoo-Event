import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import UserHomePage from "./components/UserHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<UserHomePage />} />
        {/* <Route path="/search" element={<SearchResult />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
