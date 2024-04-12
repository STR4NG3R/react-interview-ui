import axios from 'axios'

export const BASE_URL = 'http://localhost:9000'

export const fetchAllWidgets = () => axios.get(`${BASE_URL}/v1/widgets`).then((response) => response.data)
