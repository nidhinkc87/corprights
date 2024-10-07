import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
  path: string;
}

export default function ServiceCard({
  title,
  description,
  imgSrc,
  path,
}: ServiceCardProps) {
  return (
    <div className="group">
      <div>
        <div className="flex border border-gray-100">
          <div className="w-2/3 md:w-[160px] md:h-[160px] aspect-square max-lg:p-2">
            <Image
              src={imgSrc}
              alt={title}
              className="h-full"
              width={350}
              height={350}
            />
          </div>

          <div className="w-full grid px-[10px] lg:px-4 py-2 lg:py-3">
            <h6 className="text-xl font-bold xl:text-3xl text-dark">{title}</h6>

            <p className="text-base font-normal text-gray-400 xl:text-xl line-clamp-2">
              {description}
            </p>

            <div className="flex self-end justify-end pt-2">
              <Link
                href={path}
                className="flex items-center justify-end gap-2 px-4 py-2 w-fit"
              >
                <p className="text-primary font-bold text-base translate-x-[21px] group-hover:translate-x-0 ease-in-out delay-100 duration-500 transition-transform">
                  Know more
                </p>

                <svg
                  className="opacity-0 group-hover:opacity-100 translate-x-[21px] group-hover:translate-x-0 ease-in-out delay-100 duration-500 transition"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.86 9.9999C17.86 10.1582 17.8016 10.3166 17.6766 10.4416L12.6183 15.4999C12.3766 15.7416 11.9766 15.7416 11.735 15.4999C11.4933 15.2582 11.4933 14.8582 11.735 14.6166L16.3516 9.9999L11.735 5.38324C11.4933 5.14157 11.4933 4.74157 11.735 4.4999C11.9766 4.25824 12.3766 4.25824 12.6183 4.4999L17.6766 9.55824C17.8016 9.68324 17.86 9.84157 17.86 9.9999Z"
                    fill="#2BB162"
                  />
                  <path
                    d="M17.7184 10C17.7184 10.3417 17.435 10.625 17.0934 10.625L3.06836 10.625C2.72669 10.625 2.44336 10.3417 2.44336 10C2.44336 9.65833 2.72669 9.375 3.06836 9.375L17.0934 9.375C17.435 9.375 17.7184 9.65833 17.7184 10Z"
                    fill="#2BB162"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
