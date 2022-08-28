import { Routes, Route } from "react-router-dom";
import { About, Home } from "./pages";
import { ProtectedRoutes } from "./components";
import Header from "./components/Header";
function MainPage() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/protected" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainPage;
