import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Pages/About";
import Course from "./Pages/Course";
import Home from "./Pages/Home";
import Subject from "./Pages/Subject";
import Error from "./Component/Error/Error";
import Layout from "./Component/Layout";
import Contact from "./Component/Contact/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <div className="font-poppins bg-gray-800">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Layout/>
            }>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/choice/:id" element={<Course/>}/>
              <Route path="/choice/:id/:branchId/:semId" element={<Subject />} />
              <Route path="*" element={<Error/>}/>
          </Route>     
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
