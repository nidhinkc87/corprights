import BlogContents from "@/components/sections/blogs/BlogContents";

interface BlogDetailsProps {
  blog: Blog;
}

function BlogDetails({ blog }: BlogDetailsProps) {
  return (
    <section className="pt-[72px] lg:pt-[106px] relative mb-[66px] xl:mb-[116px]">
      <div className="container">
        <BlogContents blog={blog} />
      </div>
    </section>
  );
}

export default BlogDetails;
