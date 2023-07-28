import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const BreadCrumb = ({ links }) => {
    return (
        <nav className="flex my-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {links.map((link, id) => {
                    return (
                        <li key={id} className="inline-flex items-center">
                            <a
                                href={link.url}
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                            >
                                <BiSolidRightArrow className="w-3 h-3 mr-2.5" />
                                {link.title}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default BreadCrumb;
