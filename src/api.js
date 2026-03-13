import axios from "axios"

// const API = "http://localhost:5000/api"
const API = "https://stripe-test-g0wy.onrender.com/api"

export const createCheckout = ()=>{

 return axios.post(`${API}/create-checkout`)

}

export const getPayments = ()=>{

 return axios.get(`${API}/payments`)

}