import axios from "axios"

// const API = "http://localhost:5000/api"
const API = "https://stripe-test-puce.vercel.app/api"

export const createCheckout = ()=>{

 return axios.post(`${API}/create-checkout`)

}

export const getPayments = ()=>{

 return axios.get(`${API}/payments`)

}