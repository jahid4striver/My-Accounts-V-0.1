import { Route, Routes } from "react-router-dom";
import AddExpense from "./components/AddExpense/AddExpense";
import Navbar from "./components/Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/addexpense" element={<AddExpense/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
