import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";

import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

const App = () => {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
};

export default App;