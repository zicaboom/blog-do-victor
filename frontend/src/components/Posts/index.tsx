import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiFillLike, AiFillDislike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import './Posts.css'

type IPost = [{
    id: string,
    title: string,
    content: string,
    custom_title: string,
    updated_at: string
}]

const Posts = () => {

    const [posts, setPosts] = useState<IPost>([{
        id: "",
        title: "",
        content: "",
        custom_title: "",
        updated_at: ""
    }])

    useEffect(() => {
        axios.get(`http://localhost:4000/posts`)
            .then(response => {
                setPosts(response.data)
            })
    }, [])

    console.log(posts)
    return (
        <>
            {posts.map((post) => {
                return (
                    <div key={post.id} className="postContainer">
                        <div className="card">
                            <div className="identifier">
                                <h2 className="title">{post.title}</h2>
                                <p className="custom-title">{post.custom_title}</p>
                                <p className="updated_at">{post.updated_at}</p>
                            </div>

                            <p className="content">{post.content}</p>
                        </div>
                        <div className="buttons">
                            <AiOutlineLike />
                            <AiOutlineDislike />
                            <AiFillDislike />
                            <AiFillLike />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Posts