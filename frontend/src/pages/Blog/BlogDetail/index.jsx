import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBlogPostsData } from "../../../helpers/apiService";
import Banner from "../../../components/Banner";
import StripHtml from "../../../components/stripHTML";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetchBlogPostsData()
      .then((response) => {
        const allPosts = response.data || [];
        if (!allPosts.length) {
          setBlog(null);
          setRelatedPosts([]);
          return;
        }

        const currentPost = allPosts.find((post) => post.link === id);
        setBlog(currentPost);

        if (!currentPost) {
          setRelatedPosts([]);
          return;
        }

        const currentIndex = allPosts.findIndex((post) => post.link === id);
        const related = [];

        if (currentIndex > 0) {
          related.push(
            ...allPosts.slice(Math.max(0, currentIndex - 2), currentIndex)
          );
        }

        if (currentIndex < allPosts.length - 1) {
          related.push(allPosts[currentIndex + 1]);
        }

        const maxRelated = 3;
        if (related.length > maxRelated) {
          related.splice(maxRelated);
        } else if (related.length < maxRelated && allPosts.length > 1) {
          const additionalPosts = allPosts
            .filter(
              (post) =>
                post.link !== id && !related.some((rp) => rp.id === post.id)
            )
            .slice(0, maxRelated - related.length);
          related.push(...additionalPosts);
        }

        setRelatedPosts(related.slice(0, maxRelated));
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setBlog(null);
        setRelatedPosts([]);
      });
  }, [id]);

  if (!blog) {
    return <div></div>;
  }

  return (
    <>
      <Banner image={blog.image} title={blog.title_detailed_page} />
      <div className="mx-auto my-8 sm:my-8 lg:my-16">
        <div className="mx-auto">
          {blog.content && (
            <div
              className="container-secondary mx-auto mb-8 sm:mb-8 lg:mb-16"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          )}
          <div />
          {relatedPosts.length > 0 && (
            <div className="bg-secondaryLightBlack py-8 sm:py-8 lg:py-16">
              <h2 className="text-gray-100 pb-6 container-secondary mx-auto">
                Related Posts
              </h2>
              <div className="container-secondary mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="flex-1">
                      <Link to={`/blog-hotel-green-hills-valparai/${post.link}`} className="group">
                        <div className="relative">
                          <img
                            src={
                              post.image ||
                              "https://via.placeholder.com/300x200?text=No+Image"
                            }
                            alt={
                              post.title ? (
                                <StripHtml html={post.title} />
                              ) : (
                                "Blog Image"
                              )
                            }
                            className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-colors duration-300"
                            loading="lazy"
                          />
                          {post.title && (
                            <div
                              className="mt-2"
                              dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                          )}
                          {post.description && (
                            <div
                              className="mt-2"
                              dangerouslySetInnerHTML={{
                                __html: post.description,
                              }}
                            />
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
