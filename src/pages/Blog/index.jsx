import axios from 'axios';
import { Eye, Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { BiComment } from 'react-icons/bi';

const Blog = () => {
    const api = import.meta.env.VITE_API;
    const token = import.meta.env.VITE_PUBLIC_ACCESS_TOKEN;

    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `${api}user/blog?access_token=${token}&search=`;
            try {
                const response = await axios.get(url);
                if (response.data?.data) {
                    setBlogs(response.data.data);
                    localStorage.setItem('blogs', JSON.stringify(response.data.data));
                } else {
                    setBlogs([]);
                }
            } catch (err) {
                setError('Maʼlumotni olib kelishda xatolik yuz berdi.');
            }
        };

        const storedBlogs = localStorage.getItem('blogs');
        if (storedBlogs) {
            setBlogs(JSON.parse(storedBlogs));
        } else {
            fetchData();
        }
    }, []);

    const handleLike = async (blogId) => {
        try {
            await axios.post(`${api}user/blog/like?access_token=${token}`, {
                blog_id: blogId,
            });
            setBlogs(prev =>
                prev.map(blog =>
                    blog._id === blogId ? { ...blog, __v: blog.__v + 1 } : blog
                )
            );
        } catch (error) {
            console.error("Like qo‘shishda xatolik:", error);
        }
    };

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-6">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">My Feed</h1>
                <input
                    className="w-full max-w-[700px] border border-gray-300 hover:border-green-500 p-3 mt-4 rounded-md"
                    type="text"
                    placeholder="Search..."
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={blog._id || index}
                        className="bg-white border rounded-lg shadow hover:shadow-md transition duration-300"
                    >
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 line-clamp-4">
                                {blog.short_description.slice(0, 200)}...
                            </p>
                        </div>
                        <div className="border-t flex justify-between text-sm text-gray-600 px-5 py-3">
                            <div className="flex items-center gap-2">
                                <Eye size={16} />
                                {blog.views}
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-green-600">
                                <BiComment size={16} />
                                {blog.reaction_length}
                            </div>
                            <div
                                onClick={() => handleLike(blog._id)} // blogId o'rniga blog._id
                                className="flex items-center gap-2 cursor-pointer hover:text-green-600"
                            >
                                <Heart size={16} />
                                {blog.__v}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
