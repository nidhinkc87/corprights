import { getStrapiURL } from "@/api";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface LatestUpdatesProps {
  blogs: Blog[];
}

function LatestUpdates({ blogs }: LatestUpdatesProps) {
  return (
    <div className="container">
      <div className="border border-gray-100 mb-10">
        <div className="border-b border-gray-100">
          <div className="px-6 py-5 xl:py-10">
            <h4 className="text-primary">Latest update</h4>
          </div>
        </div>

        <div className="grid md:grid-cols-2 divide-y md:divide-x divide-gray-100">
          {blogs?.map((blog, i) => (
            <Link key={`latest-blog-${i}`} href={`/blogs/${blog.slug}`}>
              <div className="group py-6 px-4 md:px-6 hover:shadow-card-20dp ease-linear duration-700 cursor-pointer">
                <div className="group-hover:xl:scale-x-95 xl:scale-y-110 group-hover:xl:scale-y-100 origin-top ease-in-out duration-300">
                  <Image
                    src={getStrapiURL(blog?.image?.url)}
                    alt={blog?.image?.name ?? blog?.title}
                    width={420}
                    height={420}
                    className="w-full h-[320px] lg:h-[420px] aspect-square"
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
                          key={`latest-blog${i}-category-${j}`}
                          className="rounded-full bg-gray-50 px-2 py-[10px] text-gray-400 h-7 inline-flex items-center text-base font-light"
                        >
                          {property?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 xl:pt-6">
                  <h6 className="text-xl md:text-2xl lg:text-4xl font-bold text-dark">
                    {blog?.title}
                  </h6>
                </div>
              </div>
            </Link>
          ))}

          {/* <Link href="blogs-inner.html">
            <div className="group py-6 px-4 md:px-6 hover:shadow-card-20dp ease-linear duration-700 cursor-pointer">
              <div className="group-hover:xl:scale-x-95 xl:scale-y-110 group-hover:xl:scale-y-100 origin-top ease-in-out duration-300">
                <img
                  src="assets/blog/1.jpg"
                  alt=""
                  className="w-full h-[320px] lg:h-[420px] aspect-square"
                />
              </div>

              <div className="pt-6 xl:opacity-0 group-hover:xl:opacity-100">
                <div className="gap-2 md:gap-4 flex flex-wrap items-center">
                  <span className="text-base font-light text-gray-400">
                    April 16, 2024 — 10min read
                  </span>

                  <div className="flex space-x-2 md:space-x-4">
                    <span className="rounded-full bg-gray-50 px-2 py-[10px] text-gray-400 h-7 inline-flex items-center text-base font-light">
                      Property
                    </span>

                    <span className="rounded-full bg-gray-50 px-2 py-[10px] text-gray-400 h-7 inline-flex items-center text-base font-light">
                      Property
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 xl:pt-6">
                <h6 className="text-xl md:text-2xl lg:text-4xl font-bold text-dark">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper.
                </h6>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default LatestUpdates;
