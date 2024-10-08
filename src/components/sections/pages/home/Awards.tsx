import { getStrapiURL } from "@/api";
import Image from "next/image";

interface AwardsProps {
  awards: Award[];
}

const Awards = ({ awards }: AwardsProps) => {
  return (
    <section>
      <div className="container">
        <h3 className="text-center">Awards & Recognitions</h3>

        <div className="flex flex-wrap justify-center gap-9 xl:gap-14 2xl:gap-[77px] mt-10 xl:mt-16">
          {awards.map((award, index) => (
            <div className="w-[26%] md:w-[9%]" key={`award-${index}`}>
              <Image
                src={getStrapiURL(award?.image?.url)}
                width={108.8}
                height={108.8}
                alt={award.title}
                className="w-full ease-linear duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
