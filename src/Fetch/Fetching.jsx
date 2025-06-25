import React from 'react'
import axios from 'axios';

    const API_KEY = 'dc49882bf2984b23b40bbda6ce270e71'

    const apiClient = axios.create({
        baseURL : 'https://newsapi.org/v2'
    })

    export const getAllPost = async(search,page)=>{
        try{
        const response = await apiClient.get(`/everything?q=${search}&apiKey=${API_KEY}&pageSize=12&page=${page}`)
        return response.data
        }catch(err){
            console.log(err)
        }
    }
