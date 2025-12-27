import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Card from '../components/Card';

const Search = () => {
    const searchText = useParams()

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [ error, setError] = useState(null)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const queryParam = params.get('query')
        if(queryParam) {
            setQuery(queryParam)
        }
    }, [])

    useEffect(() =>{
        const fetchItems = async() => {
            setLoading(true)
            try {
                const response = await axios.get(`https://veggify-backend.vercel.app/api/items`, {
                    params :{q: query}
                })
                setResults(response.data)
            } catch (error) {
                setError(err.message || 'Error fetching data')
            } finally{
                setLoading(false)
            }
        }
        fetchItems()
    },[query])

  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-center text-3xl py-10 font-semibold text(--color-secondary) sm:text-6xl sm:leading-relaxed'>Search</h1>
        <div className='bg-gray-200 md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
            <IoIosSearch className='w-5 h-5 mr-2 text-neutral-600'/>
                <input type="search" name="query" placeholder='search for a recipe' id='search' required className='outline-none w-full placeholder:text-[#1b2629]'/>
        </div>

        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                results && results.map((item) => (
                    <Card item={item} key={item._id} />
                ))
            }
        </ul>
    </div>
  )
}

export default Search