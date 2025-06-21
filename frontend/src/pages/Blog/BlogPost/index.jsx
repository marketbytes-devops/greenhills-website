import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogPostsData } from "../../../helpers/apiService";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogPostsData()
      .then((response) => {
        setBlogs(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setBlogs([]);
      });
  }, []);

  if (!blogs || blogs.length === 0) {
    return <div></div>;
  }

  return (
    <div className="py-16 container-primary mx-auto grid grid-cols-1 md:grid-cols-3 items-start justify-between space-y-6 md:space-y-0 md:space-x-6">
      {blogs.map((posts) => (
        <div key={posts.id} className="flex-1">
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
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
