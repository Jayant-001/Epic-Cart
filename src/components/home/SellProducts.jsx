import Link from "next/link";
import React from "react";

const SellSection = () => {
    return (
        <div className="my-20 flex justify-center items-center flex-col gap-5 border rounded-lg py-20 w-full">
            <h3 className="text-xl lg:text-3xl font-semibold">
                Do you want to sell your products on our website?
            </h3>
            <Link
                href="/sell"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
            >
                Sell now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default SellSection;
