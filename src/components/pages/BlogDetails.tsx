import BlogContents from "@/components/sections/blogs/BlogContents";
import AsideSection from "@/components/sections/blogs/AsideSection";

interface BlogDetailsProps {
  blog: Blog;
}

function BlogDetails({ blog }: BlogDetailsProps) {
  return (
    <section className="pt-[72px] lg:pt-[106px] relative mb-[66px] xl:mb-[116px]">
      <div className="container grid xl:grid-cols-12 gap-8">
        <BlogContents blog={blog} />

        <AsideSection
          blogTitle={blog?.title}
          relatedBlogs={blog?.related_blogs}
        />
      </div>
    </section>
  );
}

export default BlogDetails;
