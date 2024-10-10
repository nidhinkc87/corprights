"use client";
import { getStrapiURL } from "@/api";
import { getBlogs } from "@/api/blogs";
import Loading from "@/components/elements/common/Loading";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function BlogListingSection() {
  const { ref, inView } = useInView();

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [paginationData, setPaginationData] = useState<Pagination>();

  const fetchBlogs = async (page?: number, pageSize?: number) => {
    try {
      const { data, meta } = await getBlogs(page, pageSize);

      if (!data) return;

      setPaginationData(meta?.pagination);

      const result =
        page && page > 1 ? [...blogs, ...(data || [])] : [...(data || [])];

      setBlogs(result);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadNextPage = async () => {
    const page = paginationData?.page;

    if (!page) return;

    if (page !== paginationData?.pageCount) {
      await fetchBlogs(page + 1, paginationData?.pageSize);
    }
  };

  useEffect(() => {
    if (inView) {
      LoadNextPage();
    }
  }, [inView]);

  useEffect(() => {
    fetchBlogs(1, 6);
  }, []);

  return (
    <div className="container">
      <div className="border border-gray-100 mb-10">
        <div className="border-b border-gray-100">
          <div className="px-6 py-5 xl:py-10">
            <h4 className="text-primary">Blogs</h4>
          </div>
        </div>

        {blogs.length === 0 && (
          <div className="w-full h-[328px] flex justify-center items-center text-center">
            <h6 className="text-xl lg:text-3xl font-bold text-dark">
              No Blogs Found
            </h6>
          </div>
        )}

        {blogs.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 divide-y md:divide-x divide-gray-100">
              {blogs?.map((blog, i) => (
                <Link key={`blogs-${i}`} href={`/blogs/${blog?.slug}`}>
                  <div className="group py-6 px-4 md:px-6 hover:shadow-card-20dp ease-linear duration-700">
                    <div className="group-hover:xl:scale-x-95 xl:scale-y-110 group-hover:xl:scale-y-100 origin-top ease-in-out duration-300">
                      <Image
                        src={getStrapiURL(blog?.image?.url)}
                        alt={blog?.image?.name ?? blog?.title}
                        width={374}
                        height={374}
                        className="w-full aspect-square h-[320px] lg:h-[374px] object-cover"
                      />
                    </div>

                    <div className="pt-6 xl:opacity-0 group-hover:xl:opacity-100">
                      <div className="gap-2 md:gap-4 flex flex-wrap items-center">
                        <span className="text-base font-light text-gray-400">
                          {formatDate(blog?.posted_at, "MMM dd, yyyy")} —{" "}
                          {blog.reading_time}min read
                        </span>

                        <div className="flex space-x-2 md:space-x-4">
                          {blog?.blog_categories?.map((property, j) => (
                            <span
                              key={`blog${i}-category-${j}`}
                              className="rounded-full bg-gray-50 px-2 py-[10px] text-gray-400 h-7 inline-flex items-center text-base font-light"
                            >
                              {property?.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 xl:pt-6">
                      <h6 className="text-xl lg:text-3xl font-bold text-dark">
                        {blog?.title}
                      </h6>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {paginationData?.page !== paginationData?.pageCount &&
              paginationData?.total != 0 && (
                <div ref={ref} className="w-full py-10 justify-center flex">
                  <Loading className="h-7 w-7 border-black/70 border-r-black/20" />
                </div>
              )}
          </>
        )}
      </div>
    </div>
  );
}

export default BlogListingSection;
