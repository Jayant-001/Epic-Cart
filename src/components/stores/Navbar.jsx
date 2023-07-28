import Link from "next/link";
import React from "react";
import { FaStore } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import {
    BsFillCartCheckFill,
    BsCurrencyDollar,
    BsFillWalletFill,
} from "react-icons/bs";

const StoreNavbar = () => {
    const links = [
        {
            title: "Profile",
            url: "/account/profile",
            icon: <MdManageAccounts />,
        },
        {
            title: "Cart",
            url: "/account/cart",
            icon: <BsFillCartCheckFill />,
        },
        {
            title: "Purchases",
            url: "/account/purchases",
            icon: <BsCurrencyDollar />,
        },
        {
            title: "Stores",
            url: "/account/stores",
            icon: <FaStore />,
        },
    ];

    const styles =
        "flex gap-2 py-3 items-center w-full justify-center md:justify-start bg-gray-100 px-5 rounded-lg shadow";

    return (
        <nav className="z-8 bg-slate-100 rounded-lg flex h-fit sticky top-24 items-center md:flex-col md:items-start md:gap-5 gap-2 border justify-between px-2 py-2">
            {links.map((link, id) => (
                <Link
                    key={id}
                    href={link.url}
                    className={styles}
                    title={link.title}
                >
                    {link.icon}
                    <span className="hidden sm:inline">{link.title}</span>
                </Link>
            ))}
        </nav>
    );
};

export default StoreNavbar;
