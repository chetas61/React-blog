
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {error, isPending , data:blogs} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) =>{
    //     const newBlog = blogs.filter(blog => blog.id!==id)
    //     setBlogs(newBlog)
    // }

    
    return (
        <div className="home">
            <h1>HOME PAGE</h1>
            { error && <div> {error} </div> }
            {isPending && <div > Loading. . . </div> }
            {blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
            {/* <BlogList blogs = {blogs.filter(blog=> blog.author === 'mario') }title = 'Marios Blogs'/> */}

        </div>    
    );
}
 
export default Home;
