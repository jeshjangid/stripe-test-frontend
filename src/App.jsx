import PaymentTable from "./components/PaymentsTable"
import Checkout from "./components/Checkout"


function App(){

 return(

 <div>

  <h1>Stripe Payment System</h1>

  <Checkout/>

  <PaymentTable/>

 </div>

 )

}

export default App