import React from "react";

const NewsLetterForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-[16px] sm:flex-row lg:flex-col">
        <label
          className="clip-[rect(0,0,0,0)] absolute m-[-1px] h-[1px] w-[1px] overflow-hidden border-0 p-0 whitespace-nowrap [clip-path:inset(50%)]"
          htmlFor="NewsLetterform"
        >
          Email
        </label>
        <input
          className="h-[44px] border border-gray-200 px-[20px] text-[12px] text-primary focus:inset-ring focus:shadow-md focus:outline-0 md:h-[56px]"
          id="NewsLetterform"
          type="email"
          placeholder="Enter your email address"
          aria-required="true"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          aria-describedby=""
          required
        />
        <button
          className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-[50px] border border-gray-200 px-[24px] text-[14px] shadow-md md:min-h-[56px]"
          aria-label="Subscribe"
        >
          Subscribe
        </button>
        <div className="flex-center mt-[16px] md:mt-[24px]">
          <div className="flex-center size-[32px] rounded-[50%] bg-green-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" />
              <path d="M8 12l2.5 2.5 5-5" stroke="currentColor" />
            </svg>
          </div>
          <span className="ml-[5px] text-[10px]">Thanks for subscribing</span>
        </div>
      </div>
    </form>
  );
};

export default NewsLetterForm;
