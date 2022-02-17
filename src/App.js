import "./App.css";
import Footer from "./components/Footer";
import TaskIt from "./components/TaskIt";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotesApp from "./components/NotesApp";
import ExpenseTracker from "./components/ExpenseTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskIt />} />
        <Route path="/notes" element={<NotesApp />} />
        <Route path="/expense" element={<ExpenseTracker />} />
      </Routes>
      {/* 
      <Home />
      <TaskIt />
      <NotesApp />
      <ExpenseTracker /> */}
      <Footer />
    </Router>
  );
}

export default App;
