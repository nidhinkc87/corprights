import ContactForm from "@/components/sections/contact/ContactForm";

export default function Hero() {
  return (
    <section className="pt-[72px] lg:pt-[106px] relative bg-background">
      <div className="container grid py-5 lg:py-16 2xl:pt-[103px] 2xl:pb-[90px] lg:flex">
        <div className="">
          <div className="lg:w-3/4">
            <h3 className="2xl:text-[48px] font-bold pb-6 xl:pb-9">
              We would love to talk with you!
            </h3>

            <p className="text-gray-400 font-bold text-xl xl:text-3xl">
              For More Enquiries:{" "}
              <a
                href="mailto:support@corprights.sa"
                target="_blank"
                className="lg:flex text-primary font-normal text-xl xl:text-2xl"
              >
                support@corprights.sa
              </a>
            </p>
          </div>
        </div>

        <div className="max-lg:mt-10 max-lg:mb-9 block lg:w-1/2 lg:ms-44 2xl:ms-0 lg:-mb-[42rem] lg:relative lg:z-30">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
