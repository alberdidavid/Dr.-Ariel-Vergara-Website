import Home from "./templates/home"
import About from "./templates/about"
import Blog from "./templates/blog"
import Contact from "./templates/contact"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<Contact/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact"element={<Contact/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
