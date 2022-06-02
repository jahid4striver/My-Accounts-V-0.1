import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddExpense from "./components/AddExpense/AddExpense";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="addexpense" element={<AddExpense/>}></Route>
        </Route>
      </Routes>

      <ToastContainer/>
    </div>
  );
}

export default App;
