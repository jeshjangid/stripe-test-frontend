import {createCheckout} from "../api"

export default function Checkout(){

 const handlePayment = async ()=>{

  const res = await createCheckout()

  window.location.href = res.data.url

 }

 return(

  <button onClick={handlePayment}>
   Pay Now
  </button>

 )

}