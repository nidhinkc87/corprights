import { getStrapiURL } from "@/api";
import Image from "next/image";
import { formatDate } from "date-fns";
import Link from "next/link";

interface LatestBlogsProps {
  blogs: Blog[];
}

const LatestBlogs = ({ blogs }: LatestBlogsProps) => {
  return (
    <section className="py-16 xl:py-24 2xl:py-[130px]">
      <div className="container">
        <h2 className="mx-auto text-center">Check our latest blogs.</h2>

        <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-4 xl:mt-6 xl:max-w-5xl mx-auto text-center">
          Our approach to Nearbound extends the concept of a trusted ecosystem
          to a global scale. We adopt the speed, efficiency and scale of digital
          solutions and combine it with the personal connections that are best
          delivered through traditional face to face relationships and
          interactions.
        </p>

        <div className="mt-10 xl:mt-16 grid md:grid-cols-2 gap-[14px] lg:gap-6">
          {blogs.map((blog, index) => (
            <Link
              href={`/blogs/${blog?.slug}`}
              key={`blog-card-${index}`}
              className="grid grid-cols-5 group cursor-pointer hover:shadow-card-20dp ease-linear duration-300"
            >
              <div className="col-span-2 flex">
                <Image
                  src={getStrapiURL(blog?.image?.url)}
                  width={224}
                  height={224}
                  alt={blog?.title}
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-3 bg-card px-[14px] py-[18px] xl:px-6 xl:py-[30px]">
                <div className="flex flex-col gap-4 justify-between xl:h-full">
                  <div>
                    <h6 className="font-bold text-[10.5px] lg:text-2xl text-dark">
                      {blog?.title}
                    </h6>

                    <p className="font-normal text-[9px] lg:text-xl text-gray-400 py-2 lg:py-5 border-b border-gray-100">
                      {blog?.description}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-xs lg:text-base font-bold text-dark capitalize">
                        {blog?.author}
                      </span>

                      <span className="flex mx-4 w-[6px] h-[6px] bg-[#D9D9D9] rounded-full"></span>

                      <span className="text-xs lg:text-base font-normal text-dark">
                        {formatDate(blog?.posted_at, " dd MMM yyyy")}
                      </span>
                    </div>

                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          className="group-hover:fill-primary group-hover:opacity-100 opacity-30 ease-linear"
                          d="M2.33329 15.8635H13.6666C13.94 15.8635 14.1666 15.6369 14.1666 15.3635C14.1666 15.0902 13.94 14.8635 13.6666 14.8635H2.33329C2.05996 14.8635 1.83329 15.0902 1.83329 15.3635C1.83329 15.6369 2.05996 15.8635 2.33329 15.8635Z"
                          fill="#706F6F"
                        />
                        <path
                          className="group-hover:fill-primary group-hover:opacity-100 opacity-30 ease-linear"
                          d="M3.33337 12.8634C3.46004 12.8634 3.58671 12.8167 3.68671 12.7167L13.02 3.38341C13.2134 3.19007 13.2134 2.87007 13.02 2.67674C12.8267 2.4834 12.5067 2.4834 12.3134 2.67674L2.98004 12.0101C2.78671 12.2034 2.78671 12.5234 2.98004 12.7167C3.08004 12.8167 3.20671 12.8634 3.33337 12.8634Z"
                          fill="#706F6F"
                        />
                        <path
                          className="group-hover:fill-primary group-hover:opacity-100 opacity-30 ease-linear"
                          d="M12.6666 10.3767C12.94 10.3767 13.1666 10.15 13.1666 9.8767V3.03003C13.1666 2.7567 12.94 2.53003 12.6666 2.53003H5.81996C5.54663 2.53003 5.31996 2.7567 5.31996 3.03003C5.31996 3.30336 5.54663 3.53003 5.81996 3.53003H12.1666V9.8767C12.1666 10.15 12.3933 10.3767 12.6666 10.3767Z"
                          fill="#706F6F"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
