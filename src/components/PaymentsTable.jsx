import {useEffect,useState} from "react"
import {getPayments} from "../api"

export default function PaymentTable(){

 const [payments,setPayments] = useState([])

 useEffect(()=>{
  fetchPayments()
 },[])

 const fetchPayments = async()=>{

  const res = await getPayments()

  setPayments(res.data)

 }

 return(

 <table border="1">

 <thead>

 <tr>
  <th>Email</th>
  <th>Amount</th>
  <th>Status</th>
 </tr>

 </thead>

 <tbody>

 {payments.map(p=>(

  <tr key={p._id}>

   <td>{p.customerEmail}</td>
   <td>{p.amount/100}$</td>
   <td>{p.status}</td>

  </tr>

 ))}

 </tbody>

 </table>

 )

}