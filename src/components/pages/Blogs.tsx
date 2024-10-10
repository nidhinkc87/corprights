"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/sections/blogs/Hero";
import LatestUpdates from "@/components/sections/blogs/LatestUpdates";
import BlogListingSection from "@/components/sections/blogs/BlogListingSection";
import { getBlogs } from "@/api/blogs";

function Blogs() {
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
  const fetchLatestBlogs = async () => {
    try {
      const { data } = await getBlogs(1, 2);

      if (!data) return;
      const result = [...(data || [])];

      setLatestBlogs(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  return (
    <>
      <Hero />

      {latestBlogs && latestBlogs?.length > 0 && (
        <LatestUpdates blogs={latestBlogs} />
      )}

      <BlogListingSection />
    </>
  );
}

export default Blogs;
