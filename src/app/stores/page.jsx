'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const StoresPage = () => {

    const {data, ieLoading, isError, error} = useQuery({
        queryKey: ['stores'],
        queryFn: async () => {
            return await axios.get('/api/stores')
        }
    })

  return (
    <div>StoresPage</div>
  )
}

export default StoresPage