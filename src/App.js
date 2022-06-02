import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddExpense from "./components/AddExpense/AddExpense";
import Navbar from "./components/Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/addexpense" element={<AddExpense/>}></Route>
      </Routes>

      <ToastContainer/>
    </div>
  );
}

export default App;
