import {React} from 'react'
import {useNavigate} from "react-router-dom"
import {createBlog} from '../services/blog-api'

function New() {
    const navigate = useNavigate()

    const createTheBlog = event => {
        event.preventDefault()
        let addition = {title: event.target.title.value, body: event.target.body.value}
        createBlog(addition)
        navigate('/')
    }
  return (
    <div>
        <h2>Write a New Blog Post</h2>
        <form onSubmit={createTheBlog}>
            <input type={'text'} name="title" defaultValue={'Blog Title'} />
            <input type={'text'} name="body" defaultValue={'Blog'} />
            <input type='submit' />
        </form>
    </div>
  )
}

export default New