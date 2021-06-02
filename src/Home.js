import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState(null);

    // const handleDelete = (id) =>{
    //     const newBlog = blogs.filter(blog => blog.id!==id)
    //     setBlogs(newBlog)
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json()
        })
        .then(data => {
            setBlogs(data)
        })
    } , [])

    return (
        <div className="home">
            <h1>HOME PAGE</h1>
            {blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
            {/* <BlogList blogs = {blogs.filter(blog=> blog.author === 'mario') }title = 'Marios Blogs'/> */}

        </div>    
    );
}
 
export default Home;
