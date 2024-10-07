interface EligibilityProps {
  eligibility: Eligibility;
}

export default function Eligibility({ eligibility }: EligibilityProps) {
  return (
    <section className="relative pb-16 2xl:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 2xl:gap-11 mx-auto md:px-6 py-10 xl:py-14 2xl:py-[72px] 2xl:px-[42px] bg-primary">
          <div className="flex-none md:w-1/4 flex flex-col px-6 md:px-0">
            <h3 className="xl:max-w-2xl text-white">Eligibility Criteria</h3>

            <p className="text-base xl:text-xl font-normal text-white pt-5">
              {eligibility?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-11 px-1 xl:px-0">
            {eligibility?.feature?.map((feat) => (
              <div className="flex gap-4 xl:gap-5" key={feat?.id}>
                <div>
                  <div className="w-[18px] h-[18px] rounded-full bg-[#4BAE4F] flex items-center justify-center">
                    <svg
                      width={10}
                      height={7}
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.35254 0.466017C9.57051 0.683986 9.57051 1.04258 9.35254 1.26055L4.0791 6.53399C3.97012 6.64297 3.82598 6.69922 3.68184 6.69922C3.5377 6.69922 3.39355 6.64297 3.28457 6.53399L0.647852 3.89727C0.429883 3.6793 0.429883 3.3207 0.647852 3.10274C0.86582 2.88477 1.22441 2.88477 1.44238 3.10274L3.68184 5.34219L8.55801 0.466017C8.77598 0.244533 9.13457 0.244533 9.35254 0.466017Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-base xl:text-xl font-normal text-white">
                  {feat?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
