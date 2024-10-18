import { getBlogBySlug, getBlogsByLimit, getBlogSEOBySlug } from "@/api/blogs";
import BlogDetails from "@/components/pages/BlogDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const res = await getBlogSEOBySlug(params.slug);

  if (!res?.data || res?.data?.length === 0) return {};
  const metaData: Metadata = {
    title: res?.data?.[0].meta_title,
    description: res?.data?.[0].meta_description,
  };
  return metaData;
};

export async function generateStaticParams() {
  const count = process?.env?.NEXT_STATIC_PATH_COUNT;

  const limit = count ? parseInt(count) : 6;

  const { data } = await getBlogsByLimit(limit);

  return data?.map((page: Blog) => ({
    slug: page?.slug,
  }));
}

async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data } = await getBlogBySlug(slug);

  if (data?.length === 0) notFound();

  return <BlogDetails blog={data?.[0]} />;
}

export default BlogDetailPage;
