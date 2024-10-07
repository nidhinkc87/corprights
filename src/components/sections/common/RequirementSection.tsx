interface RequirementSectionProps {
  requirement: Requirement;
}
export default function RequirementSection({
  requirement,
}: RequirementSectionProps) {
  return (
    <section className="pt-16 2xl:pt-20">
      <div className="container pt-16 lg:py-20 2xl:pt-[160px]">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 xl:gap-14">
          <div className="lg:w-1/2">
            <div>
              <h3 className="xl:max-w-2xl">{requirement?.title}</h3>

              <p className="text-base xl:text-xl font-normal text-gray-400 mt-3 xl:mt-7">
                {requirement?.description}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            {requirement?.cards?.map((card) => (
              <div key={card?.id} className="mb-6 xl:mb-10 2xl:mb-[50px]">
                <h6 className="text-xl lg:text-4xl font-bold text-dark">
                  {card?.title}
                </h6>

                <p className="text-base xl:text-xl font-normal text-gray-400 mt-3 xl:mt-4">
                  {card?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
