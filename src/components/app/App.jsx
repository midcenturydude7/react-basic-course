import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <Main />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Counter />} />
        <Route pat="/todo-list" element={<TodoList />} />
      </Routes> */}
    </div>
  );
}

export default App;
