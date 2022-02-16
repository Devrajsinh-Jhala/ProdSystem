import "./App.css";
import Footer from "./components/Footer";
import TaskIt from "./components/TaskIt";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotesApp from "./components/NotesApp";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TaskIt />
      <NotesApp />
      <ExpenseTracker />
      <Footer />
    </>
  );
}

export default App;
