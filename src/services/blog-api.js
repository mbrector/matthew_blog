import axios from "axios"
const URL = 'http://localhost:3001/blogs/'

export const getBlogs = () => {
    const response = axios.get(URL)
    return response
}

export const getBlog = (id) => {
    const response = axios.get(`${URL}/${id}`)
    return response
}

export const deleteBlog = (id) => {
    const response = axios.delete(`${URL}/${id}`)
    return response
}

export const createBlog = (added) => {
    const response = axios.post(URL, added)
    return response
}

export const editBlog = (id, updated) => {
    const response = axios.put(`${URL}/${id}`, updated)
    return response
}