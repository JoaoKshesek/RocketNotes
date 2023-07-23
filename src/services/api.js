import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketnotes-api-3o2h.onrender.com"
})