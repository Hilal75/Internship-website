import "./App.css";
import { Route, Routes } from "react-router";
import Registrationform from "./Registrationform";
import Home from "./Home";



function App() {





   return (
      <div>
         <Routes>
         <Route path="/" element={<Home/>}>
      </Route>

      <Route path="/rentalform" element={<Registrationform/>}>
         
      </Route>

         </Routes>

      </div>


      


   );
}

export default App;
