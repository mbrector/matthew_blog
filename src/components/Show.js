import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { deleteBlog, getBlog, editBlog } from '../services/blog-api'

function Show() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        getBlog(id)
        .then(res => {
        setBlog(res.data)
        setComments(res.data.comments)})
    }, [])

    const addComment = event => {
        event.preventDefault()
        const comment = comments
        comment.push({ name: event.target.name.value, message: event.target.message.value })
        const updated = { title: blog.title, body: blog.body, comments: comment }
        editBlog(id, updated)
        navigate(`/${id}`)
        event.target.name.value = null
        event.target.message.value = null
    }
        
    const deleteTheBlog = () => {
        deleteBlog(id)
        navigate('/')
        }
console.log(comments)
  return (
    <div> 
      <div className="show">
        <h2>{blog.title}</h2><br />
        <h3>{blog.body}</h3>
        <button onClick={() => {navigate(`/${id}/Edit`)}}>Edit Blog</button>
        <button onClick={deleteTheBlog}>Delete</button>
      </div>   
      {
          comments.map((comment, i)=>{
            return(
            <div className="comments" key = {i}>
                <h3>{comment.name}</h3>
                <h4>{comment.message}</h4>
            </div>
          )
      })}
        <form onSubmit={addComment}>
            Name: <input type='text' name="name"/><br />
            Comment: <input type='text' name="message"/><br />
            <input type='submit' />
        </form>
    </div>
  )
}

export default Show