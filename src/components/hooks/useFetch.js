import { useEffect, useState } from 'react'

import axios from "axios";

export const useFetch = ({ intialState, route, options }) => {
    const [data, setData] = useState(intialState);
    const [loading, setLoading] = useState(true)
    const [refetch, setReFetch] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios(route, { ...options, method: 'get' })
            .then(res => setData(res.data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [route, refetch])

    const refresh = () => setReFetch(prev => !prev)
    return { setData, data, loading, error, refresh }
}