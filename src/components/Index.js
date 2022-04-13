import {React, useState, useEffect} from 'react'
import {getBlogs} from '../services/blog-api'

function Blogs() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        getBlogs()
        .then(res => setBlogs(res.data))
    }, [])

    return (
        <div>
            <h1>Matthew's Blog</h1>
            <div className="blogs">
                {blogs.map((blog, i) => {
                    return(
                        <a href={`/${blog._id}`}>
                            <div className="blog" key = {i}>
                            {blog.title}
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs