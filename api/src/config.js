import { config } from "dotenv"

config()

export const HOST_FRONT = 'http://localhost:5173'
export const HOST = 'http://localhost:3001/api'


export const PAYPAL_API_KEY = process.env.PAYPAL_API_KEY
export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT
export const PAYPAL_API = "https://api-m.sandbox.paypal.com"
