import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

interface OverviewProps {
  overview: Overview;
  className?: string;
}

export default function Overview({ overview, className }: OverviewProps) {
  return (
    <section
      className={cn(
        "pt-[58px] xl:pt-[62px] 2xl:pt-20 pb-16 lg:pb-20 2xl:pb-[106px] bg-primary-gradient",
        className
      )}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 2xl:grid-cols-[minmax(0,0.8fr)_1.3fr] lg:gap-x-20">
          <div className="self-start">
            <div>
              <h4 className="text-3xl text-white max-xl:text-4xl xl:max-w-2xl xl:text-5xl 2xl:text-6xl">
                {overview?.title}
              </h4>
            </div>
          </div>

          <div className="space-y-10 xl:space-y-14">
            <div
              className={cn(
                "prose-sm lg:prose-base font-light text-background prose-a:no-underline prose-a:text-primary/85 hover:prose-a:text-primary",
                "text-base xl:text-2xl font-normal"
              )}
            >
              <Markdown>{overview?.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
