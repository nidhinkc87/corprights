import { Button } from "@/components/ui/Button";
import CalendlyEmbed from "@/components/common/CalendlyEmbed";
import Image from "next/image";
import icon from "@/assets/icons/whatsapp.png";

const url = process.env.NEXT_CALENDLY_URL ?? "";

export default function ScheduleSection() {
  if (!url) return <></>;

  return (
    <section id="calendly" className="pt-12 container lg:pt-20">
      <div className="bg-primary-gradient pt-16 max-lg:pb-10">
        <div className="flex flex-col max-lg:space-y-4 max-lg:px-6">
          <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
            <h2 className="text-background text-center">
              Book Free Business Consultation with Business Advisors!
            </h2>

            <p className="text-background text-center text-2xl">
              Looking to set up your business in Saudi Arabia? Get tailored
              guidance from our seasoned business advisors to turn your vision
              into a reality. With a team of professionals, finance advisors,
              and qualified practitioners, we provide expert services to cater
              to all your business needs.
            </p>

            <div className="w-full flex justify-center">
              <div className="lg:w-1/2 flex w-full max-lg:flex-col max-lg:space-y-4 lg:space-x-2.5">
                <Button
                  variant="secondary"
                  className="w-full gap-3 px-8 mx-auto hover:text-background"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5417 18.9584C13.6 18.9584 12.6084 18.7334 11.5834 18.3001C10.5834 17.8751 9.57502 17.2917 8.59169 16.5834C7.61669 15.8667 6.67502 15.0667 5.78335 14.1917C4.90002 13.3001 4.10002 12.3584 3.39169 11.3917C2.67502 10.3917 2.10002 9.39175 1.69169 8.42508C1.25835 7.39175 1.04169 6.39175 1.04169 5.45008C1.04169 4.80008 1.15835 4.18341 1.38335 3.60841C1.61669 3.01675 1.99169 2.46675 2.50002 1.99175C3.14169 1.35841 3.87502 1.04175 4.65835 1.04175C4.98335 1.04175 5.31669 1.11675 5.60002 1.25008C5.92502 1.40008 6.20002 1.62508 6.40002 1.92508L8.33335 4.65008C8.50835 4.89175 8.64169 5.12508 8.73335 5.35841C8.84169 5.60841 8.90002 5.85842 8.90002 6.10008C8.90002 6.41675 8.80835 6.72508 8.63335 7.01675C8.50835 7.24175 8.31669 7.48342 8.07502 7.72508L7.50835 8.31675C7.51669 8.34175 7.52502 8.35842 7.53335 8.37508C7.63335 8.55008 7.83335 8.85008 8.21669 9.30008C8.62502 9.76675 9.00835 10.1917 9.39169 10.5834C9.88335 11.0667 10.2917 11.4501 10.675 11.7667C11.15 12.1667 11.4584 12.3667 11.6417 12.4584L11.625 12.5001L12.2334 11.9001C12.4917 11.6417 12.7417 11.4501 12.9834 11.3251C13.4417 11.0417 14.025 10.9917 14.6084 11.2334C14.825 11.3251 15.0584 11.4501 15.3084 11.6251L18.075 13.5917C18.3834 13.8001 18.6084 14.0667 18.7417 14.3834C18.8667 14.7001 18.925 14.9917 18.925 15.2834C18.925 15.6834 18.8334 16.0834 18.6584 16.4584C18.4834 16.8334 18.2667 17.1584 17.9917 17.4584C17.5167 17.9834 17 18.3584 16.4 18.6001C15.825 18.8334 15.2 18.9584 14.5417 18.9584ZM4.65835 2.29175C4.20002 2.29175 3.77502 2.49175 3.36669 2.89175C2.98335 3.25008 2.71669 3.64175 2.55002 4.06675C2.37502 4.50008 2.29169 4.95841 2.29169 5.45008C2.29169 6.22508 2.47502 7.06675 2.84169 7.93342C3.21669 8.81675 3.74169 9.73341 4.40835 10.6501C5.07502 11.5667 5.83335 12.4584 6.66669 13.3001C7.50002 14.1251 8.40002 14.8917 9.32502 15.5667C10.225 16.2251 11.15 16.7584 12.0667 17.1417C13.4917 17.7501 14.825 17.8917 15.925 17.4334C16.35 17.2584 16.725 16.9917 17.0667 16.6084C17.2584 16.4001 17.4084 16.1751 17.5334 15.9084C17.6334 15.7001 17.6834 15.4834 17.6834 15.2667C17.6834 15.1334 17.6584 15.0001 17.5917 14.8501C17.5667 14.8001 17.5167 14.7084 17.3584 14.6001L14.5917 12.6334C14.425 12.5167 14.275 12.4334 14.1334 12.3751C13.95 12.3001 13.875 12.2251 13.5917 12.4001C13.425 12.4834 13.275 12.6084 13.1084 12.7751L12.475 13.4001C12.15 13.7167 11.65 13.7917 11.2667 13.6501L11.0417 13.5501C10.7 13.3667 10.3 13.0834 9.85835 12.7084C9.45835 12.3667 9.02502 11.9667 8.50002 11.4501C8.09169 11.0334 7.68335 10.5917 7.25835 10.1001C6.86669 9.64175 6.58335 9.25008 6.40835 8.92508L6.30835 8.67508C6.25835 8.48342 6.24169 8.37508 6.24169 8.25841C6.24169 7.95842 6.35002 7.69175 6.55835 7.48341L7.18335 6.83342C7.35002 6.66675 7.47502 6.50841 7.55835 6.36675C7.62502 6.25841 7.65002 6.16675 7.65002 6.08342C7.65002 6.01675 7.62502 5.91675 7.58335 5.81675C7.52502 5.68341 7.43335 5.53341 7.31669 5.37508L5.38335 2.64175C5.30002 2.52508 5.20002 2.44175 5.07502 2.38341C4.94169 2.32508 4.80002 2.29175 4.65835 2.29175ZM11.625 12.5084L11.4917 13.0751L11.7167 12.4917C11.675 12.4834 11.6417 12.4917 11.625 12.5084Z"
                      fill="#2BB162"
                    />
                  </svg>
                  Talk with experts
                </Button>

                <Button
                  variant="outline"
                  className="text-background hover:border-none w-full gap-3 px-8 mx-auto"
                >
                  <Image src={icon} alt="whatsapp" />
                  Chat with us
                </Button>
              </div>
            </div>
          </div>

          <div>
            <CalendlyEmbed url={url} />
          </div>
        </div>
      </div>
    </section>
  );
}
