import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Course from "./Pages/Course";
import Home from "./Pages/Home";
import Subject from "./Pages/Subject";

function App() {
  return (
    <>
      <div className="font-poppins bg-gray-800">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/choice/:id" element={<Course/>}/>
            <Route path="/choice/:id/:branchId/:semId" element={<Subject />} />
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
