import { getStrapiURL } from "@/api";
import { cn } from "@/lib/utils";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface BlogContentsProps {
  blog: Blog;
}

function BlogContents({ blog }: BlogContentsProps) {
  const { title, image, content, posted_at, reading_time, blog_categories } =
    blog;

  const formattedPostDate = formatDate(posted_at, "MMM dd, yyyy");

  return (
    <div className="xl:col-span-8">
      <div className="pt-5 lg:pt-6">
        <Link
          href="/blogs"
          className="space-x-[10px] p-[10px] flex items-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1669 3.40001C13.1669 3.55835 13.1086 3.71668 12.9836 3.84168L7.55023 9.27501C7.15023 9.67501 7.15023 10.325 7.55023 10.725L12.9836 16.1583C13.2252 16.4 13.2252 16.8 12.9836 17.0417C12.7419 17.2833 12.3419 17.2833 12.1002 17.0417L6.66689 11.6083C5.78356 10.725 5.78356 9.28335 6.66689 8.39168L12.1002 2.95835C12.3419 2.71668 12.7419 2.71668 12.9836 2.95835C13.1002 3.08335 13.1669 3.24168 13.1669 3.40001Z"
              fill="#706F6F"
            />
          </svg>

          <p className="text-xl font-bold text-gray-400">Back</p>
        </Link>
      </div>

      <div className="grid pt-4 lg:pt-6 ">
        <div className="xl:max-w-4xl">
          <h2>{title}</h2>
        </div>
      </div>

      <div className="pt-4 lg:pt-6">
        <div className="gap-2 md:gap-4 flex flex-wrap  items-center">
          <div className="flex items-center">
            <span className="text-base font-bold text-dark capitalize">
              {blog?.author}
            </span>

            <span className="flex ms-2 md:ms-4 w-[6px] h-[6px] bg-[#D9D9D9] rounded-full "></span>
          </div>

          <span className="text-base font-light text-gray-400">
            {formattedPostDate} — {reading_time}
            min read
          </span>

          <div className="flex space-x-2 md:space-x-4">
            {blog_categories?.map((category, i) => (
              <span
                key={`blog-category-${i}`}
                className="rounded-full bg-gray-50 px-2 py-[10px] text-gray-400 h-7 inline-flex items-center text-base font-light"
              >
                {category?.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 lg:pt-8 space-y-8 xl:space-y-12">
        <div>
          <Image
            src={getStrapiURL(image?.url)}
            alt={blog?.image?.name ?? blog?.title}
            width={858}
            height={610}
            sizes="100vw"
            className="w-full object-cover"
          />
        </div>

        <div>
          <div
            className={cn(
              "prose-md md:prose-base  font-normal text-gray-400 prose-a:no-underline prose-a:text-primary/85 hover:prose-a:text-primary"
            )}
          >
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContents;
