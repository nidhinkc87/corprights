"use client";
import { getStrapiURL } from "@/api";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface AsideSectionProps {
  blogTitle: string;
  relatedBlogs: Blog[];
}

const shareButtons = [
  {
    component: FacebookShareButton,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.04623 5.865V8.613H7.03223V11.973H9.04623V21.959H13.1802V11.974H15.9552C15.9552 11.974 16.2152 10.363 16.3412 8.601H13.1972V6.303C13.1972 5.96 13.6472 5.498 14.0932 5.498H16.3472V2H13.2832C8.94323 2 9.04623 5.363 9.04623 5.865Z"
          fill="#2BB162"
        />
      </svg>
    ),
  },
  {
    component: TwitterShareButton,
    icon: (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.523784 0L7.94723 9.92792L0.477539 18H2.15915L8.6995 10.9331L13.9834 18H19.705L11.8642 7.51363L18.8174 0H17.1357L11.1131 6.50843L6.24645 0H0.5249H0.523784ZM2.996 1.23873H5.62388L17.2305 16.7613H14.6026L2.996 1.23873Z"
          fill="#2BB162"
        />
      </svg>
    ),
  },
  {
    component: LinkedinShareButton,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.959 13.719V21.098H17.681V14.213C17.681 12.483 17.062 11.303 15.514 11.303C14.332 11.303 13.628 12.099 13.319 12.868C13.206 13.143 13.177 13.526 13.177 13.911V21.098H8.897C8.897 21.098 8.955 9.438 8.897 8.229H13.177V10.053L13.149 10.095H13.177V10.053C13.745 9.178 14.76 7.927 17.033 7.927C19.848 7.927 21.959 9.767 21.959 13.719ZM4.421 2.026C2.958 2.026 2 2.986 2 4.249C2 5.484 2.93 6.473 4.365 6.473H4.393C5.886 6.473 6.813 5.484 6.813 4.249C6.787 2.986 5.887 2.026 4.422 2.026H4.421ZM2.254 21.098H6.532V8.229H2.254V21.098Z"
          fill="#2BB162"
        />
      </svg>
    ),
  },
  {
    component: WhatsappShareButton,
    icon: (
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2067 0H11.1566C5.09529 0 0.181641 4.91365 0.181641 10.975V11.0251C0.181641 17.0863 5.09529 22 11.1566 22H11.2067C17.268 22 22.1816 17.0863 22.1816 11.0251V10.975C22.1816 4.91365 17.268 0 11.2067 0Z"
          fill="#2BB162"
        />
        <path
          d="M13.3212 14.2198C10.5044 14.2198 8.21269 11.9267 8.21191 9.10902C8.21269 8.39477 8.79409 7.81396 9.50659 7.81396C9.57984 7.81396 9.65232 7.82014 9.72172 7.83248C9.87439 7.85793 10.0194 7.90961 10.1528 7.98751C10.172 7.99908 10.1852 8.01759 10.1882 8.03919L10.4859 9.91582C10.4897 9.93819 10.4828 9.95979 10.4681 9.97599C10.3039 10.158 10.0942 10.2891 9.86052 10.3547L9.74794 10.3863L9.79035 10.4951C10.1744 11.4731 10.9562 12.2545 11.9348 12.6401L12.0435 12.6833L12.0751 12.5707C12.1406 12.337 12.2717 12.1272 12.4537 11.9629C12.4668 11.9506 12.4846 11.9444 12.5023 11.9444C12.5062 11.9444 12.51 11.9444 12.5146 11.9452L14.3907 12.2429C14.4131 12.2468 14.4316 12.2591 14.4432 12.2784C14.5203 12.4118 14.5719 12.5576 14.5981 12.7103C14.6105 12.7782 14.6159 12.8499 14.6159 12.9248C14.6159 13.6382 14.0352 14.219 13.3212 14.2198Z"
          fill="#FDFDFD"
        />
        <path
          d="M18.3169 10.3818C18.1649 8.66487 17.3784 7.07209 16.1023 5.89736C14.8184 4.71569 13.1528 4.0647 11.4109 4.0647C7.58781 4.0647 4.47721 7.17622 4.47721 11.0004C4.47721 12.2839 4.83114 13.5342 5.50122 14.6233L4.00684 17.9323L8.79149 17.4225C9.62351 17.7634 10.5041 17.9362 11.4101 17.9362C11.6484 17.9362 11.8928 17.9238 12.1381 17.8984C12.354 17.8752 12.5722 17.8413 12.7866 17.7981C15.9881 17.151 18.3253 14.3086 18.3438 11.0375V11.0004C18.3438 10.7922 18.3346 10.5839 18.3161 10.3818H18.3169ZM8.97579 15.9701L6.32862 16.2524L7.11899 14.5007L6.96091 14.2886C6.94935 14.2732 6.93778 14.2577 6.92467 14.24C6.2384 13.292 5.87597 12.1721 5.87597 11.0012C5.87597 7.94831 8.35891 5.46465 11.4109 5.46465C14.2701 5.46465 16.6937 7.69609 16.9273 10.5446C16.9397 10.6973 16.9466 10.8508 16.9466 11.002C16.9466 11.0452 16.9458 11.0876 16.9451 11.1331C16.8865 13.687 15.1029 15.8559 12.6077 16.4082C12.4172 16.4506 12.2221 16.483 12.0278 16.5038C11.8258 16.527 11.6183 16.5385 11.4125 16.5385C10.6791 16.5385 9.96665 16.3966 9.29348 16.1159C9.21868 16.0858 9.14542 16.0534 9.0768 16.0202L8.97656 15.9716L8.97579 15.9701Z"
          fill="#FDFDFD"
        />
      </svg>
    ),
  },
];

const AsideSection = ({ blogTitle, relatedBlogs }: AsideSectionProps) => {
  const pathname = usePathname();
  const webSiteUrl = process.env.NEXT_PUBLIC_BASE_URL + pathname;

  return (
    <div className="xl:col-span-4 xl:pt-[24%]">
      <div className="mb-10 xl:mb-8">
        <div className="flex items-center xl:justify-end">
          <p className="text-dark font-normal text-xl">Share</p>

          {shareButtons.map(({ component: Component, icon }, index) => (
            <Component
              key={`social-share-button-${index}`}
              className=" cursor-pointer p-2 flex items-center justify-center w-fit"
              url={webSiteUrl}
              title={blogTitle}
              resetButtonStyle={false}
            >
              {icon}
            </Component>
          ))}
        </div>
      </div>

      {relatedBlogs && relatedBlogs.length > 0 && (
        <div className="xl:sticky xl:top-24">
          <h6 className="text-3xl lg:text-4xl font-extrabold text-primary pb-6">
            Read Next
          </h6>

          <div className="gap-4 grid md:grid-cols-2 xl:grid-cols-1">
            {relatedBlogs?.map((blog, i) => (
              <Link
                key={`related-blog-${i}`}
                href={`/blogs/${blog.slug}`}
                className="group"
              >
                <div className="flex border border-gray-100">
                  <div className="w-1/3 aspect-square relative">
                    <Image
                      src={getStrapiURL(blog?.image?.url)}
                      alt={blog?.image?.name ?? blog?.title}
                      fill
                      sizes="150px"
                      className="w-full h-full aspect-square"
                    />
                  </div>

                  <div className="w-2/3 px-4 content-center">
                    <p className="text-2xl xl:text-3xl xl:leading-[26px] font-bold text-dark ">
                      {blog?.title}
                    </p>

                    <div className="flex justify-between mt-2">
                      <div className="flex items-center">
                        <span className="text-base font-bold text-dark capitalize">
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
      )}
    </div>
  );
};

export default AsideSection;
