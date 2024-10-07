import ServiceCard from "./ServiceCard";
import { cn } from "@/lib/utils";
import { getStrapiURL } from "@/api";

interface RelatedCardsProps {
  services: Service[] | License[];
  className?: string;
  isService?: boolean;
}

export default function RelatedCards({
  services,
  className,
  isService = true,
}: RelatedCardsProps) {
  return (
    <section className={cn("pt-16 2xl:pt-20", className)}>
      <div className="container">
        <div className="xl:max-w-xl 2xl:max-w-3xl">
          <h3>Other services we offer</h3>

          <p className="mt-4 text-base font-normal text-gray-400 xl:text-3xl xl:mt-6">
            Corprights wants to be the first choice for any business planning to
            expand or restructure globally.
          </p>
        </div>
      </div>

      <div className="container mt-8 xl:mt-10">
        <div className="grid md:grid-cols-2 gap-[10px] xl:gap-10">
          {services?.map((service) => (
            <ServiceCard
              key={service?.id}
              title={service?.title}
              imgSrc={getStrapiURL(service?.image?.url)}
              description={service?.short_description}
              path={`/${isService ? "services" : "licenses"}/${service?.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
