import CurrentYear from "@/components/common/CurrentYear";
import EmailSubscriptionForm from "./EmailSubscriptionForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerImage from "@/assets/home/footer-image.png";
import footerLogo from "@/assets/logo/footer-logo.png";

interface FooterProps {
  footer?: Footer;
}

const quickLinks = [
  { href: "/", name: "Home" },
  {
    href: "/about",
    name: "About Us",
  },
  {
    href: "/blogs",
    name: "Blogs",
  },
  {
    href: "/contact-us",
    name: "Contact Us",
  },
];

function Footer({ footer }: FooterProps) {
  const footerLinks = footer?.links;

  return (
    <footer className="bg-foreground pb-[70px]">
      <div className="container space-y-6 md:space-y-12 2xl:space-y-[100px]">
        <div>
          <div>
            <Image
              src={footerImage}
              alt="footer-image"
              className="mx-auto pointer-events-none"
              placeholder="blur"
            />
          </div>

          <div className="flex flex-col gap-4 text-center text-gray-100 mt-6 xl:mt-14">
            <h2 className="text-transparent bg-clip-text bg-primary-gradient">
              Get Started In Minutes
            </h2>

            <p className="text-base xl:text-2xl font-normal xl:max-w-3xl mx-auto">
              Transform your business with Corprights — expert cold emailing
              team that boosts your company growth and expands your market reach
              efficiently.
            </p>

            <div className="mt-4 flex justify-center">
              <div className="relative w-full md:max-w-md">
                <EmailSubscriptionForm />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row justify-between border-b border-dark pb-6 md:pb-10 2xl:pb-[46px]">
            <div className="space-y-8 max-w-[242.55px]">
              <div>
                <Image
                  src={footerLogo}
                  alt="footer logo"
                  width={166}
                  height={48}
                />
              </div>

              <p className="font-normal text-base text-gray-100">
                #7004, Aseel Plaza, Tawbah Street, Ash, Sharafeyah, Jeddah, KSA
              </p>

              <ul className="flex gap-4 items-center">
                <Link href="#" target="_blank">
                  <li className="p-1 hover:bg-white/20 ease-linear duration-300">
                    <svg
                      width="21"
                      height="14"
                      viewBox="0 0 21 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.312 0.0171133H4.645C2.355 0.0171133 0.5 1.85211 0.5 4.11611V9.88411C0.5 12.1481 2.356 13.9841 4.645 13.9841H16.312C18.602 13.9841 20.457 12.1481 20.457 9.88411V4.11611C20.457 1.85211 18.601 0.0161133 16.312 0.0161133V0.0171133ZM13.509 7.28011L8.052 9.85511C8.01872 9.87114 7.98192 9.87848 7.94503 9.87647C7.90815 9.87445 7.87237 9.86313 7.84103 9.84357C7.8097 9.82401 7.78382 9.79684 7.7658 9.76459C7.74779 9.73234 7.73822 9.69605 7.738 9.65911V4.35011C7.73867 4.31299 7.74872 4.27663 7.76722 4.24444C7.78573 4.21224 7.81208 4.18526 7.84382 4.16599C7.87556 4.14673 7.91167 4.13581 7.94877 4.13425C7.98587 4.1327 8.02276 4.14057 8.056 4.15711L13.514 6.89211C13.5504 6.91024 13.5809 6.93826 13.602 6.97294C13.6232 7.00762 13.6341 7.04756 13.6336 7.08818C13.6331 7.1288 13.6211 7.16845 13.5991 7.20258C13.577 7.2367 13.5458 7.26392 13.509 7.28111V7.28011Z"
                        fill="#E0E0E0"
                      />
                    </svg>
                  </li>
                </Link>

                <Link href="#" target="_blank">
                  <li className="p-1 hover:bg-white/20 ease-linear duration-300">
                    <svg
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.546 3.865V6.613H0.531998V9.973H2.546V19.959H6.68V9.974H9.455C9.455 9.974 9.715 8.363 9.841 6.601H6.697V4.303C6.697 3.96 7.147 3.498 7.593 3.498H9.847V0H6.783C2.443 0 2.546 3.363 2.546 3.865Z"
                        fill="#E0E0E0"
                      />
                    </svg>
                  </li>
                </Link>

                <Link href="#" target="_blank">
                  <li className="p-1 hover:bg-white/20 ease-linear duration-300">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.523601 0L7.94704 9.92792L0.477356 18H2.15897L8.69932 10.9331L13.9833 18H19.7048L11.864 7.51363L18.8172 0H17.1356L11.1129 6.50843L6.24627 0H0.524716H0.523601ZM2.99582 1.23873H5.62369L17.2303 16.7613H14.6024L2.99582 1.23873Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                </Link>

                <Link href="#" target="_blank">
                  <li className="p-1 hover:bg-white/20 ease-linear duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
                        fill="#E0E0E0"
                      />
                      <path
                        d="M11.9821 6.81885C10.6135 6.82096 9.3016 7.36563 8.33397 8.33345C7.36633 9.30127 6.82192 10.6133 6.82007 11.9818C6.82166 13.3508 7.36609 14.6632 8.33397 15.6312C9.30185 16.5993 10.6142 17.144 11.9831 17.1458C13.3522 17.1443 14.6647 16.5997 15.6328 15.6316C16.6009 14.6635 17.1455 13.3509 17.1471 11.9818C17.145 10.6129 16.6 9.30073 15.6318 8.33304C14.6635 7.36535 13.351 6.82117 11.9821 6.81985V6.81885ZM11.9821 15.1378C11.1453 15.1378 10.3428 14.8054 9.75115 14.2138C9.15947 13.6221 8.82707 12.8196 8.82707 11.9828C8.82707 11.1461 9.15947 10.3436 9.75115 9.75193C10.3428 9.16025 11.1453 8.82785 11.9821 8.82785C12.8188 8.82785 13.6213 9.16025 14.213 9.75193C14.8047 10.3436 15.1371 11.1461 15.1371 11.9828C15.1371 12.8196 14.8047 13.6221 14.213 14.2138C13.6213 14.8054 12.8188 15.1378 11.9821 15.1378Z"
                        fill="#E0E0E0"
                      />
                      <path
                        d="M17.1559 8.09509C17.8391 8.09509 18.3929 7.54127 18.3929 6.85809C18.3929 6.17492 17.8391 5.62109 17.1559 5.62109C16.4728 5.62109 15.9189 6.17492 15.9189 6.85809C15.9189 7.54127 16.4728 8.09509 17.1559 8.09509Z"
                        fill="#E0E0E0"
                      />
                    </svg>
                  </li>
                </Link>

                <Link href="#" target="_blank">
                  <li className="p-1 hover:bg-white/20 ease-linear duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.959 13.7189V21.0979H17.681V14.2129C17.681 12.4829 17.062 11.3029 15.514 11.3029C14.332 11.3029 13.628 12.0989 13.319 12.8679C13.206 13.1429 13.177 13.5259 13.177 13.9109V21.0979H8.897C8.897 21.0979 8.955 9.43788 8.897 8.22888H13.177V10.0529L13.149 10.0949H13.177V10.0529C13.745 9.17788 14.76 7.92688 17.033 7.92688C19.848 7.92688 21.959 9.76688 21.959 13.7189ZM4.421 2.02588C2.958 2.02588 2 2.98588 2 4.24888C2 5.48388 2.93 6.47288 4.365 6.47288H4.393C5.886 6.47288 6.813 5.48388 6.813 4.24888C6.787 2.98588 5.887 2.02588 4.422 2.02588H4.421ZM2.254 21.0979H6.532V8.22888H2.254V21.0979Z"
                        fill="#E0E0E0"
                      />
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 2xl:gap-16">
              <div>
                <h6 className="text-white p-4 capitalize font-bold">
                  Quick Links
                </h6>

                <ul className="text-gray-100">
                  {quickLinks.map((quickLink, index) => (
                    <li
                      key={`quicklink-${index}`}
                      className="p-4 w-fit h-[42px] flex items-center hover:bg-gray-100/10 ease-linear duration-300 rounded-[45px] capitalize"
                    >
                      <Link
                        href={quickLink.href ?? "#"}
                        className="text-base font-normal hover:text-primary ease-linear duration-300"
                      >
                        {quickLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="text-white p-4 capitalize font-bold">
                  Services & Licences
                </h6>

                <ul className="text-gray-100">
                  {footerLinks?.map((link, index) => (
                    <li
                      key={`service-${index}`}
                      className="p-4 w-fit h-[42px] flex items-center hover:bg-gray-100/10 ease-linear duration-300 rounded-[45px] capitalize"
                    >
                      <Link
                        href={link.path ?? "#"}
                        className="text-base font-normal hover:text-primary ease-linear duration-300"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="text-white p-4 capitalize font-bold">
                  Policies
                </h6>

                <ul className="text-gray-100">
                  <li className="p-4 w-fit h-[42px] flex items-center hover:bg-gray-100/10 ease-linear duration-300 rounded-[45px]">
                    <Link
                      href="/terms"
                      className="text-base font-normal hover:text-primary ease-linear duration-300 "
                    >
                      Term of use
                    </Link>
                  </li>

                  <li className="p-4 w-fit h-[42px] flex items-center hover:bg-gray-100/10 ease-linear duration-300 rounded-[45px]">
                    <Link
                      href="/privacy-policy"
                      className="text-base font-normal hover:text-primary ease-linear duration-300 "
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-10 2xl:pt-[50px]">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
              <div className="flex items-center justify-center text-gray-100">
                <p className="text-base font-normal text-gray-100 p-3 text-center">
                  Copyrights © {<CurrentYear />} All Rights Reserved By
                  Corprights
                </p>

                {/* <ul className="text-gray-100 hidden md:flex">
                  <li className="p-4 w-fit h-[42px] flex items-center hover:bg-gray-100/10 ease-linear duration-300 rounded-[45px]">
                    <Link
                      href="/privacy-policy"
                      className="text-base font-normal hover:text-primary ease-linear duration-300 "
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li className="p-4 w-fit h-[42px] flex items-center hover:bg-gray-100/10 ease-linear duration-300 rounded-[45px]">
                    <Link
                      href="#"
                      className="text-base font-normal hover:text-primary ease-linear duration-300 "
                    >
                      Terms & Uses
                    </Link>
                  </li>
                </ul> */}
              </div>

              <p className="text-base font-normal text-gray-100 flex items-center justify-center gap-2 ">
                Designed with
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3 1.70859C14.8125 1.40859 14.325 1.22109 13.7625 1.10859C13.425 1.03359 13.0875 0.996094 12.7125 0.996094C12.5625 0.996094 12.4125 0.996094 12.225 1.03359C10.9875 1.14609 9.825 1.70859 8.9625 2.64609C8.1 1.74609 6.9375 1.14609 5.7 1.03359C5.2125 0.996094 4.6875 0.996094 4.1625 1.10859C3.7125 1.22109 3.1875 1.40859 2.7 1.70859C1.1625 2.60859 0.1875 4.29609 0.1875 6.09609C0.1875 10.8961 8.4375 16.4461 8.775 16.7086L9 16.8586L9.225 16.7086C9.5625 16.4836 17.8125 10.8211 17.8125 6.13359C17.8125 4.29609 16.8375 2.60859 15.3 1.70859ZM5.5875 2.53359L5.5125 3.28359C4.4625 3.20859 3.5625 3.65859 3 4.55859L2.3625 4.14609C3.0375 3.02109 4.275 2.42109 5.5875 2.53359ZM6.75 13.2211C4.9875 11.6836 3 9.84609 2.0625 7.63359L2.775 7.33359C3.6375 9.39609 5.55 11.1586 7.275 12.6211L6.75 13.2211Z"
                    fill="white"
                  />
                </svg>
                by
                <Link href={"https://pixbitsolutions.com/"} target="_blank">
                  <span className="font-bold text-white">
                    {" "}
                    Pixbit Solutions.com
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
