import Detail from "./Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Main";
import { AboutUs, Confidenc, Contact } from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Index url="" />} />
        <Route path=":arg" element={<Detail />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="theme1" element={<Index url="politics" />} />
        <Route path="theme2" element={<Index url="region" />} />
        <Route path="theme3" element={<Index url="investments" />} />
        <Route path="search/:word" element={<Index url="search" />} />
        <Route path="contact" element={<Contact />} />
        <Route path="confidenc" element={<Confidenc />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
