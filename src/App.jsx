import { BrowserRouter, Routes, Route } from "react-router-dom"
import Checkout from "./components/Checkout"
import PaymentTable from "./components/PaymentsTable"
import Success from "./Success"
import Cancel from "./Cancel"

function App(){
 return(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={
      <>
       <Checkout/>
       <PaymentTable/>
      </>
    }/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/cancel" element={<Cancel/>}/>
   </Routes>
  </BrowserRouter>
 )
}

export default App