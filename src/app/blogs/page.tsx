import { getSEOByPath } from "@/api/seo";
import Blogs from "@/components/pages/Blogs";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getSEOByPath("blogs");

  if (!res?.data || res?.data?.length === 0) return {};
  const seo = res?.data?.[0];
  return { title: seo?.meta_title, description: seo?.meta_description };
};

const BlogsPage = async () => {
  return <Blogs />;
};

export default BlogsPage;
