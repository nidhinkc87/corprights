"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/BreadCrumb";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { BackgroundImage } from "@/components/ui/BackgroundImage";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Separator } from "@/components/ui/Seperator";
import { cn } from "@/lib/utils";
import { formatDate } from "date-fns";
import { getStrapiURL } from "@/api";
import { usePathname } from "next/navigation";

interface BlogContentsProps {
  blog: Blog;
}

function BlogContents({ blog }: BlogContentsProps) {
  const {
    title,
    image,
    content,
    posted_at,
    reading_time,
    blog_categories,
    related_blogs,
  } = blog;

  const formattedPostDate = formatDate(posted_at, "dd MMMM yyyy");

  const pathname = usePathname();
  const webSiteUrl = process.env.NEXT_PUBLIC_BASE_URL + pathname;

  return (
    <div>
      <div className="lg:hidden pb-3 md:pb-6">
        <div className="pt-5 ">
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

        <div className="grid pt-4 xl:max-w-4xl">
          <h2>{title}</h2>
        </div>

        <div className="pt-4  pb-2">
          <div className="gap-2 md:gap-4 flex flex-wrap  items-center">
            <div className="flex items-center ">
              <span className="text-base font-bold text-dark capitalize">
                {blog?.author}
              </span>

              <span className="flex ms-2 md:ms-4 w-[6px] h-[6px] bg-[#D9D9D9] rounded-full "></span>
            </div>

            <span className="text-base font-light text-gray-400">
              {formattedPostDate} — {reading_time} mins read
            </span>

            <div className="flex space-x-2 md:space-x-4">
              {blog_categories?.map((category, i) => (
                <span
                  key={`blog-category-${i}`}
                  className="bg-gray-50 px-2 py-[10px] text-gray-400 h-7 inline-flex items-center text-base font-light"
                >
                  {category?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-[858/610] lg:aspect-[1272/655]">
        <BackgroundImage
          src={getStrapiURL(image?.url)}
          alt={blog?.image?.name ?? blog?.title}
          ImageProps={{
            sizes: "100vw",
            alt: blog?.image?.name ?? blog?.title,
          }}
          className="w-full object-cover"
        >
          <Breadcrumb className="absolute top-10 xl:top-16 left-16 max-lg:hidden">
            <BreadcrumbList>
              <BreadcrumbItem className="text-background font-bold">
                <BreadcrumbLink asChild>
                  <Link href="/blogs">Blogs</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-background" />

              <BreadcrumbItem>
                <BreadcrumbPage className="text-background">
                  {blog?.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col gap-16 max-lg:hidden absolute bottom-[64px] inset-x-[60px]">
            <div className="lg:max-w-[947px]">
              <h3 className="text-white ">
                Challenges and Opportunities for Small Businesses in Saudi
                Arabia
              </h3>

              <div className="flex gap-4 mt-6">
                {blog_categories?.map((category, i) => (
                  <span
                    key={`blog-category-tile-${i}`}
                    className="bg-[#FFFFFF33] px-2 py-[10px] text-background h-7 inline-flex items-center text-base font-normal"
                  >
                    {category?.name}
                  </span>
                ))}
                <span className="text-base text-background font-normal">
                  {reading_time}
                  min read
                </span>
              </div>
            </div>

            <div className="flex w-full justify-between ">
              <div className="flex space-x-6 items-center">
                <div className="flex gap-4 ">
                  <div className="bg-[#FFFFFF33] w-12 h-12  flex justify-center items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00033 0C6.15938 0 4.66699 1.49239 4.66699 3.33333C4.66699 5.17428 6.15938 6.66667 8.00033 6.66667C9.84126 6.66667 11.3337 5.17428 11.3337 3.33333C11.3337 1.49239 9.84126 0 8.00033 0ZM6.00033 3.33333C6.00033 2.22877 6.89573 1.33333 8.00033 1.33333C9.10493 1.33333 10.0003 2.22877 10.0003 3.33333C10.0003 4.4379 9.10493 5.33333 8.00033 5.33333C6.89573 5.33333 6.00033 4.4379 6.00033 3.33333Z"
                        fill="white"
                      />

                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.70406 8C3.81758 8 0.666992 11.1506 0.666992 15.0371C0.666992 15.5689 1.09813 16 1.62995 16H14.3707C14.9025 16 15.3337 15.5689 15.3337 15.0371C15.3337 11.1506 12.1831 8 8.29659 8H7.70406ZM8.29659 9.33333C11.3223 9.33333 13.7977 11.6892 13.9885 14.6667H2.01216C2.20299 11.6892 4.67839 9.33333 7.70406 9.33333H8.29659Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-background text-base font-normal">
                      Author
                    </span>

                    <p className="text-background font-bold text-xl capitalize">
                      {blog?.author}
                    </p>
                  </div>
                </div>

                <Separator
                  orientation="vertical"
                  className="h-[80%] bg-gray-50"
                />

                <div className="flex gap-4">
                  <div className="bg-[#FFFFFF33] w-12 h-12  flex justify-center items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_7162_17784)">
                        <path
                          d="M8.38812 12.0822V12.0894C8.52125 12.8432 9.14062 13.4625 9.89719 13.5963H9.90156H9.905C10.5556 13.6982 11.2181 13.6982 11.8687 13.5963L11.8762 13.5947C12.6312 13.4625 13.2497 12.8438 13.3844 12.0879V12.0835C13.3845 12.082 13.3845 12.0806 13.3844 12.0791C13.4865 11.4294 13.4865 10.7678 13.3844 10.1182C13.3844 10.1182 13.3844 10.116 13.3844 10.1147V10.1079C13.2497 9.35379 12.6312 8.73442 11.8747 8.60067H11.87H11.8666C11.217 8.499 10.5555 8.499 9.90594 8.60067H9.9025H9.89531C9.14156 8.73379 8.52219 9.35348 8.38875 10.1088V10.1135V10.1175C8.28708 10.7672 8.28708 11.4288 8.38875 12.0785C8.38875 12.0785 8.38781 12.081 8.38812 12.0822ZM9.55875 10.3144C9.60469 10.0554 9.84344 9.81629 10.1 9.77098H10.1028C10.6226 9.691 11.1515 9.691 11.6712 9.77098C11.93 9.81692 12.1687 10.0557 12.2141 10.3122V10.3147C12.2941 10.8343 12.2941 11.363 12.2141 11.8825C12.1681 12.1419 11.9294 12.3807 11.6731 12.426H11.6716C11.1513 12.506 10.6218 12.506 10.1016 12.426C9.8425 12.38 9.60375 12.1413 9.55875 11.885V11.8822C9.47875 11.3626 9.47875 10.8338 9.55875 10.3141V10.3144Z"
                          fill="white"
                        />

                        <path
                          d="M4.76459 9.90581e-07C4.55537 9.74174e-07 4.35472 0.0830912 4.20675 0.231002C4.05878 0.378912 3.97561 0.579533 3.97553 0.788751V1.42375C2.47178 1.73125 1.12084 3.10406 0.854275 4.61344C0.698025 5.54688 0.55365 6.81719 0.551775 8.55094C0.5499 10.2847 0.698963 11.5559 0.854275 12.4884C1.12459 14.0288 2.52303 15.4256 4.06209 15.6975C4.99553 15.8538 6.26584 15.9981 7.99959 16C9.73334 16.0019 11.0046 15.8525 11.9371 15.6975C13.4752 15.4256 14.8721 14.0288 15.144 12.4906C15.3002 11.5572 15.4446 10.2869 15.4465 8.55313C15.4483 6.81938 15.2993 5.54781 15.144 4.61563C14.8774 3.10625 13.5268 1.73344 12.0227 1.42594V0.788751C12.0186 0.582239 11.9337 0.385572 11.7862 0.240977C11.6387 0.096383 11.4404 0.0153906 11.2338 0.0153906C11.0273 0.0153906 10.8289 0.096383 10.6814 0.240977C10.5339 0.385572 10.449 0.582239 10.4449 0.788751V1.1925C9.95396 1.14656 9.40428 1.11125 8.78865 1.09406V0.788751C8.78865 0.685145 8.76824 0.582553 8.72858 0.486837C8.68892 0.391121 8.6308 0.304156 8.55752 0.23091C8.48425 0.157664 8.39726 0.0995713 8.30153 0.0599513C8.20579 0.0203313 8.10319 -4.00579e-05 7.99959 9.90581e-07C7.7904 9.90581e-07 7.58978 0.0831012 7.44186 0.231021C7.29394 0.37894 7.21084 0.579561 7.21084 0.788751V1.09375C6.59396 1.11094 6.04428 1.14625 5.55459 1.19219V0.788751C5.55459 0.685066 5.53415 0.582398 5.49443 0.48662C5.45471 0.390843 5.3965 0.303837 5.32313 0.230578C5.24975 0.15732 5.16265 0.0992467 5.06681 0.0596819C4.97097 0.020117 4.86827 -0.000163329 4.76459 9.90581e-07ZM14.1396 6.045C14.2222 6.87816 14.2628 7.71495 14.2612 8.55219C14.2596 9.91938 14.1674 11.1416 13.9758 12.2891C13.8855 12.7938 13.6008 13.305 13.178 13.7291C12.7552 14.1531 12.2411 14.4375 11.7365 14.5272C10.589 14.7188 9.36646 14.8125 7.99959 14.8125C6.63271 14.8125 5.41021 14.7188 4.2624 14.5272C3.75771 14.4366 3.24678 14.1522 2.8224 13.7291C2.39803 13.3059 2.1149 12.7938 2.02459 12.2894C1.83428 11.1425 1.74084 9.92 1.73928 8.55219C1.73773 7.71872 1.77788 6.8857 1.85959 6.05625C4.35553 5.925 9.14709 5.75875 14.1383 6.045H14.1396ZM7.99959 2.29156C9.36615 2.29156 10.589 2.38531 11.7368 2.57719C12.2415 2.6675 12.7524 2.95219 13.1768 3.375C13.6012 3.79781 13.884 4.31031 13.9746 4.815C13.9765 4.82563 13.978 4.83625 13.9796 4.84625C9.15771 4.5825 4.55396 4.73063 2.0174 4.85875C2.0199 4.84406 2.02209 4.8275 2.02459 4.81438C2.11521 4.31 2.39959 3.79875 2.8224 3.37469C3.24521 2.95063 3.75803 2.66719 4.2624 2.57688C5.4099 2.38656 6.6324 2.29313 7.99959 2.29156Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7162_17784">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-background text-base font-normal">
                      Date
                    </span>

                    <p className="text-background font-bold text-xl capitalize">
                      {formattedPostDate}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center ">
                <p className="text-background font-normal text-xl">Share</p>

                {shareButtons.map(({ component: Component, icon }, index) => (
                  <Component
                    key={`social-share-button-${index}`}
                    className=" cursor-pointer p-2 flex items-center justify-center w-fit"
                    url={webSiteUrl}
                    title={blog?.title}
                    resetButtonStyle={false}
                  >
                    {icon}
                  </Component>
                ))}
              </div>
            </div>
          </div>
        </BackgroundImage>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#000000B2] to-[#00000000] -z-[1]"></div>
      </div>
      <div className="pt-6 lg:pt-8 lg:px-16 space-y-8 xl:space-y-12 ">
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

      <div className="flex items-center mt-8 lg:hidden">
        <p className="text-foreground font-normal text-xl">Share</p>

        {shareButtons.map(({ component: Component, icon }, index) => (
          <Component
            key={`social-share-button-${index}`}
            className=" cursor-pointer p-2 flex items-center justify-center w-fit"
            url={webSiteUrl}
            title={blog?.title}
            resetButtonStyle={false}
          >
            {icon}
          </Component>
        ))}
      </div>

      {related_blogs && Boolean(related_blogs?.length) && (
        <div className="mt-10 xl:mt-16">
          <h6 className="font-bold text-4xl">Related Blogs</h6>
          <div className="mt-4 lg:mt-8 grid md:grid-cols-2 gap-[14px] lg:gap-6">
            {related_blogs.map((blog, index) => (
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
                    className="w-full h-full pointer-events-none"
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
      )}
    </div>
  );
}

export default BlogContents;

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
