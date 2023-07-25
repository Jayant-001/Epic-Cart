
import Link from "next/link";
import React from "react";
import { FaStoreAlt } from "react-icons/fa";


const StoreCard = ({ data }) => {
    return (
        <div className="w-full sm:w-[40%] md:w-[33%] lg:w-[30%] py-5 mx-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                <FaStoreAlt className="text-white w-10 h-10" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {data.title}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {data.desc}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    {data.isDemo ? (
                        <Link
                            href={`/account/stores/create`}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Create a store
                        </Link>
                    ) : (
                        <Link
                            href={`/account/stores/${data._id}`}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            View store
                        </Link>
                    )}

                    {/* <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                        Message
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default StoreCard;
