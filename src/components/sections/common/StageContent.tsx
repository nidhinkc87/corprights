import Image from "next/image";
import { cn } from "@/lib/utils";
import { getStrapiURL } from "@/api";

interface StageContentProps {
  stage: Stage;
  index: number;
  active: boolean;
}

export default function StageContent({
  stage,
  index,
  active,
}: StageContentProps) {
  if (!active) return <></>;

  return (
    <div>
      <div className="flex items-center justify-center gap-x-[10px] w-fit px-3 rounded-full h-10 border border-gray-100 mb-8 max-md:hidden">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.50016 11.8733H1.8335C1.56016 11.8733 1.3335 11.6467 1.3335 11.3733C1.3335 11.1 1.56016 10.8733 1.8335 10.8733H8.50016C8.7735 10.8733 9.00016 11.1 9.00016 11.3733C9.00016 11.6533 8.7735 11.8733 8.50016 11.8733Z"
            fill="url(#paint0_linear_6209_904)"
          />
          <path
            d="M7.01986 15.1667H3.31982C1.85982 15.1667 1.33984 14.6533 1.33984 13.2V10.4667C1.33984 9.01333 1.85982 8.5 3.31982 8.5H7.01986C8.47986 8.5 8.99984 9.01333 8.99984 10.4667V13.2067C8.99984 14.6533 8.47986 15.1667 7.01986 15.1667ZM3.31315 9.5C2.40648 9.5 2.33317 9.57333 2.33317 10.4667V13.2067C2.33317 14.1 2.40648 14.1733 3.31315 14.1733H7.01318C7.91985 14.1733 7.99316 14.1 7.99316 13.2067V10.4667C7.99316 9.57333 7.91985 9.5 7.01318 9.5H3.31315Z"
            fill="url(#paint1_linear_6209_904)"
          />
          <path
            d="M10.5 15.1667C10.32 15.1667 10.1533 15.0667 10.0666 14.9133C9.97996 14.7533 9.97997 14.5667 10.0733 14.4067L10.7733 13.24C10.9133 13.0067 11.22 12.9267 11.46 13.0667C11.7 13.2067 11.7733 13.5133 11.6333 13.7533L11.4533 14.0533C13.2933 13.62 14.6733 11.9667 14.6733 9.99333C14.6733 9.72 14.9 9.49333 15.1733 9.49333C15.4467 9.49333 15.6733 9.72 15.6733 9.99333C15.6667 12.8467 13.3466 15.1667 10.5 15.1667Z"
            fill="url(#paint2_linear_6209_904)"
          />
          <path
            d="M1.8335 6.49999C1.56016 6.49999 1.3335 6.27333 1.3335 5.99999C1.3335 3.15333 3.6535 0.833328 6.50016 0.833328C6.68016 0.833328 6.84685 0.933329 6.93351 1.08666C7.02018 1.24666 7.02017 1.43333 6.92684 1.59333L6.22685 2.75999C6.08685 2.99333 5.78016 3.07333 5.54016 2.93333C5.30016 2.79333 5.22682 2.48666 5.36682 2.24666L5.54683 1.94666C3.70683 2.37999 2.32682 4.03333 2.32682 6.00666C2.33349 6.27333 2.10683 6.49999 1.8335 6.49999Z"
            fill="url(#paint3_linear_6209_904)"
          />
          <path
            d="M12.8335 7.83333C10.9068 7.83333 9.3335 6.26666 9.3335 4.33333C9.3335 2.39999 10.9002 0.833328 12.8335 0.833328C14.7668 0.833328 16.3335 2.39999 16.3335 4.33333C16.3335 6.26666 14.7602 7.83333 12.8335 7.83333ZM12.8335 1.83333C11.4535 1.83333 10.3335 2.95333 10.3335 4.33333C10.3335 5.71333 11.4535 6.83333 12.8335 6.83333C14.2135 6.83333 15.3335 5.71333 15.3335 4.33333C15.3335 2.95333 14.2135 1.83333 12.8335 1.83333Z"
            fill="url(#paint4_linear_6209_904)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6209_904"
              x1="1.3335"
              y1="11.8733"
              x2="6.91347"
              y2="14.8221"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#017275" />
              <stop offset="1" stopColor="#2BB162" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_6209_904"
              x1="1.33984"
              y1="15.1667"
              x2="8.42739"
              y2="15.728"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#017275" />
              <stop offset="1" stopColor="#2BB162" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_6209_904"
              x1="10.0024"
              y1="15.1667"
              x2="15.2575"
              y2="15.5287"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#017275" />
              <stop offset="1" stopColor="#2BB162" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_6209_904"
              x1="1.3335"
              y1="6.49999"
              x2="6.58236"
              y2="6.86163"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#017275" />
              <stop offset="1" stopColor="#2BB162" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_6209_904"
              x1="9.3335"
              y1="7.83333"
              x2="15.8202"
              y2="8.28044"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#017275" />
              <stop offset="1" stopColor="#2BB162" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-base font-bold text-primary">Stage {index}</p>
      </div>

      <div className="space-y-[26px] xl:space-y-14">
        <h3 className="max-xl:text-2xl 2xl:leading-[58px]">{stage?.title}</h3>

        <div
          className={cn(
            stage?.image &&
              "flex max-lg:flex-col max-lg:space-y-12 lg:space-x-24 items-start"
          )}
        >
          <div
            className={cn(
              "grid md:grid-cols-2 gap-[26px] md:gap-x-10 md:gap-y-12",
              stage?.image && "md:grid-cols-1 h-fit"
            )}
          >
            {stage?.cards?.map((card) => (
              <div key={card?.id}>
                <div className="flex items-center gap-x-[10px]">
                  <div className="w-6 h-6 text-center bg-primary-gradient">
                    <span className="text-base font-bold text-white">1</span>
                  </div>

                  <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                    {card?.title}
                  </h6>
                </div>

                <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                  {card?.description}
                </p>
              </div>
            ))}
          </div>

          {stage?.image && (
            <div className="relative w-full max-lg:w-72">
              <Image
                src={getStrapiURL(stage?.image?.url)}
                alt={stage?.title}
                className="object-cover"
                width={620}
                height={720}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
