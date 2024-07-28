import "./App.css";
import CourseSelection from "./pages/CourseSelection/CourseSelection";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import PreviousCourses from "./pages/PreviousCourses/PreviousCourses.jsx";
import Simulations from "./pages/Simulations/Simulations";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/select-course"} element={<CourseSelection />} />
          <Route path={"/previous-courses"} element={<PreviousCourses />} />
          <Route path={"/simulations"} element={<Simulations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
