import { BASE_URL } from "../lib/apiConnect";
import axios from "axios";

export const createWidget = ({ name, price, description }) => axios(`${BASE_URL}/v1/widgets`, { method: 'post', data: { name, price, description } })
export const deleteWidget = ({ name }) => axios(`${BASE_URL}/v1/widgets/${name}`, { method: 'delete' })
export const updateWidget = ({ name, price, description }) => axios(`${BASE_URL}/v1/widgets`, { method: 'put', data: { name, price, description } })