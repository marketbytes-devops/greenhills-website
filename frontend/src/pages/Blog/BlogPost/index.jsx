import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogPostsData } from "../../../helpers/apiService";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchBlogPostsData()
      .then((response) => {
        setBlogs(response.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setError("Failed to load blog posts. Please try again later.");
        setBlogs([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 min-h-[400px]">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-16 min-h-[400px]">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 min-h-[400px]">
        <div className="text-gray-600 text-lg">No blog posts available.</div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-0 mx-auto container-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogs.map((posts) => (
          <Link to={posts.link} className="group">
            <div className="relative">
              <img
                src={
                  posts.image ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={posts.title}
                className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-colors duration-300"
                loading="lazy"
              />
              {posts.title && (
                <div className="mt-4 flex postss-center justify-start">
                  <div dangerouslySetInnerHTML={{ __html: posts.title }} />
                </div>
              )}
            </div>
            {posts.description && (
              <div
                dangerouslySetInnerHTML={{ __html: posts.description }}
                className="mt-2"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;