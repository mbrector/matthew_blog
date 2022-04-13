import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { editBlog, getBlog } from '../services/blog-api'


function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const [data, setData] = useState({})

    useEffect(() => {
        getBlog(id)
        .then(res => setData(res.data))
    }, [])

    const editTheBlog = event => {
        event.preventDefault()
        let updated = {
            title: event.target.title.value,
            body: event.target.body.value,
            }
        editBlog(id, updated)
        navigate(`/${id}`)
    }
  return (
    <div>
        <h2>Edit Blog</h2>
        <form onSubmit={editTheBlog}>
            <input type='text' name="title" defaultValue={data.title}/><br />
            <input type='text' name="body" defaultValue={data.body}/><br />
            <input type='submit' />
        </form>
    </div>
  )
}

export default Edit