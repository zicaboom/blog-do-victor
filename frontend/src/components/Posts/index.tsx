import axios from 'axios'
import { useEffect, useState } from 'react'
import './Posts.css'

type IPost = [{
    id: string,
    title: string,
    content: string,
    custom_title: string,
    created_at: string,
    updated_at: string
}]
const Posts = () => {

    const [posts, setPosts] = useState<IPost>([{
        id: "",
        title: "",
        content: "",
        custom_title: "",
        created_at: "",
        updated_at: ""
    }])

    useEffect(()=>{
        axios.get(`http://localhost:4000/posts`)
            .then(response => {
                setPosts(response.data)
            })
    }, [])

    console.log(posts)
    return(
        <>
            {posts.map((post)=>{
                return(
                    <div key={post.id} className="card">
                        <div className="identifier">
                            <h2 className="title">{post.title}</h2>
                            <p className="custom-title">{post.custom_title}</p>
                        </div>
                        
                        <p className="content">{post.content}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Posts