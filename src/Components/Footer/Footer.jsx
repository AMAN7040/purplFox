import React from "react";
import styles from "../Footer/Footer.module.css";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styles.cntr}`}>
          <div className="mx-[5px] border-t border-solid border-black"></div>
        </div>
      </div>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.cntr}`}>
          <div className="-mx-[8px] flex flex-wrap justify-center md:-mx-[12px] lg:-mx-[16px] lg:justify-start">
            <div className={`${styles.clm}`}>
              <div>
                <span className="block py-[16px] font-primary text-base text-primary">
                  PurplFox
                </span>
                <div className="pt-[8px] pb-[32px] break-all">
                  <a
                    href="mailto:admin@purpelfox.com"
                    className="flex items-center text-sm font-light"
                  >
                    <span className="flex-center h-[32px] w-[32px] font-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="3"
                          y="6"
                          width="18"
                          height="12"
                          rx="2"
                          ry="2"
                        />
                        <path d="M3 6l9 6l9-6" />
                      </svg>
                    </span>
                    admin@purpelfox.com
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.clm}`} style={{ "--w-lg": 6 }}>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(40%,1fr))] gap-x-[24px] gap-y-[calc(2_*_var(--spacing))]">
                <div className="font-light">
                  <button className="pointer-events-none flex w-full cursor-pointer items-start justify-between px-0 py-[16px] text-left">
                    Support
                  </button>
                  <div className="pb-[24px]">
                    <a className="inline-block py-[8px] text-sm text-inherit decoration-0">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="font-light">
                  <button className="pointer-events-none flex w-full cursor-pointer items-start justify-between px-0 py-[16px] text-left">
                    Company
                  </button>
                  <div className="pb-[24px]">
                    <ul className="list-none">
                      <li>
                        <a className="inline-block py-[8px] text-sm text-inherit decoration-0">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className="inline-block py-[8px] text-sm text-inherit decoration-0">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.clm}`}>
              <div className="relative mt-[24px] mb-[64px] px-[24px] pt-[32px] pb-[40px] md:mt-0 md:mb-[32px]">
                <span className="mb-[16px] block font-primary text-base">
                  Subscribe to our Newsletter
                </span>
                <div className="mb-[16px]">
                  <p className="text-sm font-light">
                    Get 15% off on your first order and early access to all new
                    collections.
                  </p>
                </div>
                <NewsLetterForm />
              </div>
              <div className="mx-auto mb-[32px] max-w-[288px] md:max-w-[328px] lg:min-w-full">
                <span className="block py-[16px] text-center text-base md:text-left">
                  Follow Us On
                </span>
                <ul className="flex list-none flex-wrap justify-center md:justify-start">
                  <li>
                    <a
                      href="https://www.instagram.com/purplfox.in"
                      aria-label="Instagram"
                      className="flex-center min-h-[44px] min-w-[44px] cursor-pointer rounded-full border-0 bg-black text-white"
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 11.37C16.1234 12.2023 15.9675 13.0566 15.5607 13.7917C15.1539 14.5267 14.5183 15.1036 13.7479 15.438C12.9775 15.7724 12.1145 15.8463 11.2892 15.6495C10.464 15.4526 9.71395 14.9948 9.15502 14.3354C8.59609 13.676 8.25593 12.8493 8.17697 11.9795C8.09801 11.1097 8.28354 10.2353 8.70855 9.46983C9.13355 8.70431 9.77907 8.08131 10.5534 7.68943C11.3278 7.29756 12.1988 7.15767 13.0562 7.28886C13.9137 7.42005 14.7253 7.81671 15.3784 8.42858C16.0315 9.04044 16.4939 9.83748 16.7112 10.7176"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1.5"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
